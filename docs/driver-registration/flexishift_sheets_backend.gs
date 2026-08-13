/**
 * FlexiShift Driver Registration — Google Sheets backend
 * =========================================================================
 * Paste this entire file into Extensions > Apps Script, in a script bound
 * to the Google Sheet that should hold registrations. See
 * SETUP_INSTRUCTIONS.md for the full step-by-step deployment guide.
 *
 * What it does:
 *   - Receives a POST from the /register form each time a driver submits.
 *   - Appends one row per submission to a "Submissions" tab, with driver
 *     fields and (if present) the single truck's fields on the same row.
 *   - Writes Registration Type as "Driver only", "Driver with truck", or
 *     "Truck only".
 *   - Saves uploaded licence/vehicle documents into Google Drive and
 *     stores links to them in the sheet.
 *   - Adds a Pending / Approved / Rejected dropdown to the Status column
 *     so backoffice can review and action each row directly in the Sheet.
 *
 * The Password column stores the password as submitted (plain text) so
 * backoffice can read it. Restrict who can open this spreadsheet.
 */

// Optional shared secret. Leave blank ('') to disable the check, or set
// a random string here AND as SUBMIT_TOKEN in the HTML form — the two
// must match exactly. This is a light deterrent against random requests
// hitting your endpoint, not a substitute for keeping the URL private.
var SECRET_TOKEN = '';

var DOCS_ROOT_FOLDER_NAME = 'FlexiShift Driver Documents';

// Full header row for Submissions. Truck fields are on THIS same tab
// (there is no separate "Truck Info" column or Trucks tab write).
// After Vehicle Type … Vehicle Insured come Status / review columns.
var SUBMISSIONS_HEADERS = [
  'Timestamp', 'Submission ID', 'Registration Type', 'Referral Code',
  'Full Name', 'Date of Birth', 'Email', 'Password', 'Country', 'Country Code', 'Phone',
  'Licence Points', 'Criminal Conviction', 'Trade Number', 'Comments',
  'Marketing Opt-in', 'Accepted Terms', 'Accepted Privacy',
  'Licence Documents', 'Language',
  'Vehicle Type', 'Vehicle Type (Other)', 'Capacity', 'Capacity Unit',
  'Compartments', 'Compartment Capacities', 'Registration Number',
  'Vehicle Documents', 'Advisories', 'Advisory Details',
  'Driver Insured', 'Vehicle Insured',
  'Status', 'Reviewer Notes', 'Reviewed By', 'Reviewed At'
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);

    if (SECRET_TOKEN && payload.token !== SECRET_TOKEN) {
      return jsonResponse({ status: 'error', message: 'Invalid token' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var submissionsSheet = ss.getSheetByName('Submissions') || createSubmissionsSheet(ss);
    // Always re-apply headers so truck columns stay labelled even if
    // setupSheets was never re-run after a script update.
    ensureSubmissionsHeaders(submissionsSheet);

    var submissionId = Utilities.getUuid();
    var timestamp = new Date();

    var rootFolder = getOrCreateFolder(DOCS_ROOT_FOLDER_NAME);
    var submissionFolder = rootFolder.createFolder(
      Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HHmm') +
      ' - ' + (payload.fullName || 'Unknown')
    );

    var licenceLinks = saveFiles(payload.licenceFiles, submissionFolder);

    var hasTruck = payload.trucks && payload.trucks[0];
    var truck = hasTruck ? payload.trucks[0] : {};
    var vehicleLinks = [];
    if (hasTruck) {
      var truckFolder = submissionFolder.createFolder('Truck');
      vehicleLinks = saveFiles(truck.vehicleFiles, truckFolder);
    }

    submissionsSheet.appendRow([
      timestamp,
      submissionId,
      registrationTypeLabel(payload.registrationType),
      payload.referralCode || '',
      payload.fullName || '',
      payload.dateOfBirth || '',
      payload.email || '',
      payload.password || '',
      payload.country || '',
      payload.countryCode || '',
      payload.phone || '',
      payload.licencePoints || '',
      payload.conviction || '',
      payload.tradeNumber || '',
      payload.comments || '',
      payload.marketingOptIn ? 'Yes' : 'No',
      payload.acceptedTerms ? 'Yes' : 'No',
      payload.acceptedPrivacy ? 'Yes' : 'No',
      licenceLinks.join('\n'),
      payload.language || '',
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
      hasTruck ? (truck.driverInsured ? 'Yes' : 'No') : '',
      hasTruck ? (truck.vehicleInsured ? 'Yes' : 'No') : '',
      'Pending', // Status — dropdown applied by setupSheets()
      '',        // Reviewer Notes
      '',        // Reviewed By
      ''         // Reviewed At
    ]);

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

function registrationTypeLabel(code) {
  if (code === 'driver') return 'Driver only';
  if (code === 'driver_truck') return 'Driver with truck';
  if (code === 'truck') return 'Truck only';
  return code || '';
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
 * editor, then click Run) after pasting this script. It creates the
 * Submissions tab with headers (or overwrites row 1 if the tab already
 * exists), freezes the header row, and adds the Pending / Approved /
 * Rejected dropdown to the Status column. It does not create or write
 * to a Trucks tab — an existing Trucks tab is left untouched.
 *
 * Truck fields appear on the Submissions row as columns:
 * Vehicle Type … Vehicle Insured (not a single "Truck Info" column).
 */
function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var submissionsSheet = ss.getSheetByName('Submissions');
  if (!submissionsSheet) {
    submissionsSheet = createSubmissionsSheet(ss);
  } else {
    applySubmissionsHeaders(submissionsSheet);
  }
  Logger.log('Ready: ' + submissionsSheet.getName() + ' — headers: ' + SUBMISSIONS_HEADERS.length);
  Logger.log('Truck columns start at: Vehicle Type (column ' + (SUBMISSIONS_HEADERS.indexOf('Vehicle Type') + 1) + ')');
}

function createSubmissionsSheet(ss) {
  var sheet = ss.insertSheet('Submissions');
  applySubmissionsHeaders(sheet);
  return sheet;
}

/** Re-apply headers if row 1 is missing truck labels (e.g. Capacity). */
function ensureSubmissionsHeaders(sheet) {
  var lastHeaderCol = Math.max(sheet.getLastColumn(), SUBMISSIONS_HEADERS.length);
  var row1 = sheet.getRange(1, 1, 1, lastHeaderCol).getValues()[0];
  var vehicleTypeIdx = SUBMISSIONS_HEADERS.indexOf('Vehicle Type');
  var capacityIdx = SUBMISSIONS_HEADERS.indexOf('Capacity');
  var needsFix =
    !row1[vehicleTypeIdx] ||
    String(row1[vehicleTypeIdx]).trim() !== 'Vehicle Type' ||
    !row1[capacityIdx] ||
    String(row1[capacityIdx]).trim() !== 'Capacity' ||
    row1.length < SUBMISSIONS_HEADERS.length;

  if (needsFix) {
    applySubmissionsHeaders(sheet);
  }
}

function applySubmissionsHeaders(sheet) {
  // Clear a wide band of row 1 so leftover blank / stale labels do not
  // sit past the new header set and confuse the sheet.
  var clearTo = Math.max(sheet.getLastColumn(), SUBMISSIONS_HEADERS.length, 40);
  sheet.getRange(1, 1, 1, clearTo).clearContent();
  sheet.getRange(1, 1, 1, SUBMISSIONS_HEADERS.length)
    .setValues([SUBMISSIONS_HEADERS])
    .setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, SUBMISSIONS_HEADERS.length);

  var statusCol = SUBMISSIONS_HEADERS.indexOf('Status') + 1;
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Pending', 'Approved', 'Rejected'], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, statusCol, 999, 1).setDataValidation(rule);
}
