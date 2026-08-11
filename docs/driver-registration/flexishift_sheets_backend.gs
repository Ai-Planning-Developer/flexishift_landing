/**
 * FlexiShift Driver Registration — Google Sheets backend
 * =========================================================================
 * Paste this entire file into Extensions > Apps Script, in a script bound
 * to the Google Sheet that should hold registrations. See
 * SETUP_INSTRUCTIONS.md for the full step-by-step deployment guide.
 *
 * What it does:
 *   - Receives a POST from flexishift_driver_registration.html each time
 *     a driver submits the form.
 *   - Appends one row per submission to a "Submissions" tab.
 *   - Appends one row per truck (if any) to a "Trucks" tab, linked back
 *     to the submission by Submission ID.
 *   - Saves uploaded licence/vehicle documents into Google Drive and
 *     stores links to them in the sheet.
 *   - Adds a Pending / Approved / Rejected dropdown to the Status column
 *     so backoffice can review and action each row directly in the Sheet.
 *
 * The form's password field is never sent here — this script has no
 * concept of driver passwords and never stores them.
 */

// Optional shared secret. Leave blank ('') to disable the check, or set
// a random string here AND as SUBMIT_TOKEN in the HTML form — the two
// must match exactly. This is a light deterrent against random requests
// hitting your endpoint, not a substitute for keeping the URL private.
var SECRET_TOKEN = '';

var DOCS_ROOT_FOLDER_NAME = 'FlexiShift Driver Documents';

var SUBMISSIONS_HEADERS = [
  'Timestamp', 'Submission ID', 'Registration Type', 'Referral Code',
  'Full Name', 'Date of Birth', 'Email', 'Phone',
  'Licence Points', 'Criminal Conviction', 'Trade Number', 'Comments',
  'Truck Count', 'Marketing Opt-in', 'Accepted Terms', 'Accepted Privacy',
  'Licence Documents', 'Language',
  'Status', 'Reviewer Notes', 'Reviewed By', 'Reviewed At'
];

var TRUCKS_HEADERS = [
  'Submission ID', 'Driver Name', 'Truck Index', 'Vehicle Type',
  'Vehicle Type (Other)', 'Capacity', 'Capacity Unit', 'Compartments',
  'Compartment Capacities', 'Registration Number', 'Vehicle Documents',
  'Advisories', 'Advisory Details', 'Driver Insured', 'Vehicle Insured'
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);

    if (SECRET_TOKEN && payload.token !== SECRET_TOKEN) {
      return jsonResponse({ status: 'error', message: 'Invalid token' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var submissionsSheet = ss.getSheetByName('Submissions') || createSubmissionsSheet(ss);
    var trucksSheet = ss.getSheetByName('Trucks') || createTrucksSheet(ss);

    var submissionId = Utilities.getUuid();
    var timestamp = new Date();

    var rootFolder = getOrCreateFolder(DOCS_ROOT_FOLDER_NAME);
    var submissionFolder = rootFolder.createFolder(
      Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HHmm') +
      ' - ' + (payload.fullName || 'Unknown')
    );

    var licenceLinks = saveFiles(payload.licenceFiles, submissionFolder);

    submissionsSheet.appendRow([
      timestamp,
      submissionId,
      payload.registrationType || '',
      payload.referralCode || '',
      payload.fullName || '',
      payload.dateOfBirth || '',
      payload.email || '',
      payload.phone || '',
      payload.licencePoints || '',
      payload.conviction || '',
      payload.tradeNumber || '',
      payload.comments || '',
      payload.truckCount || 0,
      payload.marketingOptIn ? 'Yes' : 'No',
      payload.acceptedTerms ? 'Yes' : 'No',
      payload.acceptedPrivacy ? 'Yes' : 'No',
      licenceLinks.join('\n'),
      payload.language || '',
      'Pending', // Status — dropdown applied by setupSheets()
      '',        // Reviewer Notes
      '',        // Reviewed By
      ''         // Reviewed At
    ]);

    (payload.trucks || []).forEach(function (truck) {
      var truckFolder = submissionFolder.createFolder('Truck ' + truck.index);
      var vehicleLinks = saveFiles(truck.vehicleFiles, truckFolder);

      trucksSheet.appendRow([
        submissionId,
        payload.fullName || '',
        truck.index,
        truck.vehicleType || '',
        truck.vehicleTypeOther || '',
        truck.capacity || '',
        truck.capacityUnit || '',
        truck.compartments || '',
        (truck.compartmentCapacities || []).join(', '),
        truck.registrationNumber || '',
        vehicleLinks.join('\n'),
        truck.advisories || '',
        truck.advisoryDetails || '',
        truck.driverInsured ? 'Yes' : 'No',
        truck.vehicleInsured ? 'Yes' : 'No'
      ]);
    });

    return jsonResponse({ status: 'ok', submissionId: submissionId });
  } catch (err) {
    return jsonResponse({ status: 'error', message: String(err) });
  }
}

/**
 * Visiting the deployment URL directly in a browser (GET) shows this,
 * so you can sanity-check the deployment without submitting the form.
 */
function doGet(e) {
  return ContentService.createTextOutput('FlexiShift driver registration endpoint is running. POST only.');
}

function saveFiles(files, folder) {
  var links = [];
  (files || []).forEach(function (f) {
    if (!f || !f.data) return;
    var blob = Utilities.newBlob(
      Utilities.base64Decode(f.data),
      f.type || 'application/octet-stream',
      f.name || 'file'
    );
    var driveFile = folder.createFile(blob);
    // Left at Drive's default (private) sharing on purpose — these are
    // driver ID/insurance documents. Share the parent folder deliberately
    // with your backoffice team instead of making files link-accessible.
    links.push(driveFile.getUrl());
  });
  return links;
}

function getOrCreateFolder(name) {
  var folders = DriveApp.getFoldersByName(name);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(name);
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this once (select "setupSheets" in the function dropdown above the
 * editor, then click Run) after pasting this script. It creates both
 * tabs with headers, freezes the header row, and adds the Pending /
 * Approved / Rejected dropdown to the Status column. Safe to re-run —
 * it won't duplicate tabs that already exist.
 */
function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var submissionsSheet = ss.getSheetByName('Submissions') || createSubmissionsSheet(ss);
  var trucksSheet = ss.getSheetByName('Trucks') || createTrucksSheet(ss);
  Logger.log('Ready: ' + submissionsSheet.getName() + ', ' + trucksSheet.getName());
}

function createSubmissionsSheet(ss) {
  var sheet = ss.insertSheet('Submissions');
  sheet.getRange(1, 1, 1, SUBMISSIONS_HEADERS.length).setValues([SUBMISSIONS_HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, SUBMISSIONS_HEADERS.length);

  var statusCol = SUBMISSIONS_HEADERS.indexOf('Status') + 1;
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Pending', 'Approved', 'Rejected'], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, statusCol, 999, 1).setDataValidation(rule);
  return sheet;
}

function createTrucksSheet(ss) {
  var sheet = ss.insertSheet('Trucks');
  sheet.getRange(1, 1, 1, TRUCKS_HEADERS.length).setValues([TRUCKS_HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, TRUCKS_HEADERS.length);
  return sheet;
}
