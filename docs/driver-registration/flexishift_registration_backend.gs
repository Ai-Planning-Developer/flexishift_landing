/**
 * FlexiShift — REGISTRATION spreadsheet only
 * =========================================================================
 * Paste this into Extensions → Apps Script on the DRIVER REGISTRATION sheet.
 * Do not paste this into the verification spreadsheet.
 *
 * It only writes the Submissions tab. It never creates VerificationBookings.
 *
 * After paste: set SECRET_TOKEN to the same value as VITE_SUBMIT_TOKEN in .env
 * (or leave '' to skip the check). Run setupSheets. Deploy as Web app
 * (Execute as: Me, Who has access: Anyone). Keep that /exec URL as
 * VITE_GOOGLE_SHEETS_WEBHOOK_URL.
 */

var SECRET_TOKEN = '';

var DOCS_ROOT_FOLDER_NAME = 'FlexiShift Driver Documents';

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

    if (payload.kind === 'verification') {
      return jsonResponse({
        status: 'error',
        message: 'This web app is registration-only. Use the verification /exec URL.'
      });
    }

    if (SECRET_TOKEN && payload.token !== SECRET_TOKEN) {
      return jsonResponse({ status: 'error', message: 'Invalid token' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var submissionsSheet = ss.getSheetByName('Submissions') || createSubmissionsSheet(ss);
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
      'Pending',
      '',
      '',
      ''
    ]);

    return jsonResponse({ status: 'ok', submissionId: submissionId });
  } catch (err) {
    return jsonResponse({ status: 'error', message: String(err) });
  }
}

function doGet() {
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

function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var submissionsSheet = ss.getSheetByName('Submissions');
  if (!submissionsSheet) {
    submissionsSheet = createSubmissionsSheet(ss);
  } else {
    applySubmissionsHeaders(submissionsSheet);
  }
  Logger.log('Ready: ' + submissionsSheet.getName() + ' — headers: ' + SUBMISSIONS_HEADERS.length);
}

function createSubmissionsSheet(ss) {
  var sheet = ss.insertSheet('Submissions');
  applySubmissionsHeaders(sheet);
  return sheet;
}

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
