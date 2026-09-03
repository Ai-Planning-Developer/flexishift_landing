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

      if (payload.kind === 'verification') {
        return jsonResponse(handleVerificationPost(payload));
      }

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
    e = e || { parameter: {} };
    var params = e.parameter || {};
    if (params.kind === 'verification' || params.action || params.callback) {
      var result = handleVerificationGet(params);
      var cb = params.callback;
      if (cb && /^[A-Za-z_][A-Za-z0-9_]*$/.test(cb)) {
        return ContentService
          .createTextOutput(cb + '(' + JSON.stringify(result) + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }
      return jsonResponse(result);
    }
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
    setupVerificationSheets();
    Logger.log('VerificationBookings + VerificationEscalations ready');
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

  // ---------------------------------------------------------------------------
  // Video verification — Google Calendar Appointment Scheduling + Meet
  // Calendar creates the appointment and Meet link. This sheet stores status.
  // Set VERIFICATION_CALENDAR_ID and SUPPORT_ACCESS_CODE below, then run
  // setupSheets and createVerificationCalendarTrigger.
  // ---------------------------------------------------------------------------

  var SUPPORT_ACCESS_CODE = '';
  var VERIFICATION_CALENDAR_ID = ''; // calendar ID that receives appointment bookings
  var VERIFICATION_HOST_EMAIL = ''; // skip this guest when mapping invitees
  var VERIFICATION_EVENT_TITLE_FILTER = ''; // empty = all events on that calendar

  var BOOKING_HEADERS = [
    'Booking ID', 'Driver ID', 'Driver Email', 'Driver Name', 'Status',
    'Appointment Start', 'Appointment End', 'Meet URL', 'Calendar Event ID',
    'Created At', 'Updated At', 'Result Notes', 'Result By'
  ];

  var ESCALATION_HEADERS = [
    'Escalation ID', 'driver_id', 'verification_booking_id', 'reason', 'notes',
    'priority', 'created_by', 'created_at', 'status'
  ];

  function setupVerificationSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ensureNamedSheet(ss, 'VerificationBookings', BOOKING_HEADERS);
    ensureNamedSheet(ss, 'VerificationEscalations', ESCALATION_HEADERS);
  }

  function ensureNamedSheet(ss, name, headers) {
    var sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    return sheet;
  }

  function bookingsSheet() {
    setupVerificationSheets();
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName('VerificationBookings');
  }

  function escalationsSheet() {
    setupVerificationSheets();
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName('VerificationEscalations');
  }

  function requireSupport(code) {
    if (!SUPPORT_ACCESS_CODE) return { ok: false, message: 'SUPPORT_ACCESS_CODE is not set in Apps Script.' };
    if (String(code || '') !== SUPPORT_ACCESS_CODE) return { ok: false, message: 'Invalid support access code.' };
    return { ok: true };
  }

  function checkSubmitToken(token) {
    return !SECRET_TOKEN || token === SECRET_TOKEN;
  }

  function handleVerificationGet(params) {
    if (!checkSubmitToken(params.token)) {
      return { status: 'error', message: 'Invalid token' };
    }
    var action = params.action || 'lookup';
    if (action === 'lookup') return lookupBookingByEmail(params.email);
    if (action === 'list') {
      var gate = requireSupport(params.supportCode);
      if (!gate.ok) return { status: 'error', message: gate.message };
      return {
        status: 'ok',
        bookings: readBookings(),
        escalations: readEscalations()
      };
    }
    return { status: 'error', message: 'Unknown action' };
  }

  function handleVerificationPost(payload) {
    if (!checkSubmitToken(payload.token)) {
      return { status: 'error', message: 'Invalid token' };
    }
    var gate = requireSupport(payload.supportCode);
    if (!gate.ok) return { status: 'error', message: gate.message };

    var action = payload.action;
    if (action === 'syncCalendar') return syncVerificationFromCalendar();
    if (action === 'setResult') return setVerificationResult(payload);
    if (action === 'escalate') return escalateVerification(payload);
    if (action === 'seniorReview') return seniorReview(payload);
    return { status: 'error', message: 'Unknown action' };
  }

  function lookupBookingByEmail(email) {
    email = String(email || '').trim().toLowerCase();
    if (!email) return { status: 'ok', booking: null };
    var rows = readBookings();
    var match = null;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].email === email || rows[i].driverId === email) match = rows[i];
    }
    return { status: 'ok', booking: match };
  }

  function sheetObjects(sheet, headers) {
    var last = sheet.getLastRow();
    if (last < 2) return [];
    var values = sheet.getRange(2, 1, last - 1, headers.length).getValues();
    return values.map(function (row) {
      var obj = {};
      headers.forEach(function (h, i) { obj[h] = row[i]; });
      return obj;
    });
  }

  function toIso(value) {
    if (!value) return '';
    if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
      return value.toISOString();
    }
    return String(value);
  }

  function readBookings() {
    return sheetObjects(bookingsSheet(), BOOKING_HEADERS).map(function (row) {
      return {
        bookingId: String(row['Booking ID'] || ''),
        driverId: String(row['Driver ID'] || ''),
        email: String(row['Driver Email'] || '').toLowerCase(),
        name: String(row['Driver Name'] || ''),
        status: String(row['Status'] || 'BOOKED'),
        startAt: toIso(row['Appointment Start']),
        endAt: toIso(row['Appointment End']),
        meetUrl: String(row['Meet URL'] || ''),
        notes: String(row['Result Notes'] || '')
      };
    }).filter(function (row) { return row.bookingId; });
  }

  function readEscalations() {
    return sheetObjects(escalationsSheet(), ESCALATION_HEADERS).map(function (row) {
      return {
        escalationId: String(row['Escalation ID'] || ''),
        driverId: String(row['driver_id'] || ''),
        verificationBookingId: String(row['verification_booking_id'] || ''),
        reason: String(row['reason'] || ''),
        notes: String(row['notes'] || ''),
        priority: String(row['priority'] || 'NORMAL'),
        createdBy: String(row['created_by'] || ''),
        createdAt: toIso(row['created_at']),
        status: String(row['status'] || 'OPEN')
      };
    }).filter(function (row) { return row.escalationId; });
  }

  function findBookingRowIndex(bookingId) {
    var sheet = bookingsSheet();
    var last = sheet.getLastRow();
    if (last < 2) return -1;
    var ids = sheet.getRange(2, 1, last - 1, 1).getValues();
    for (var i = 0; i < ids.length; i++) {
      if (String(ids[i][0]) === String(bookingId)) return i + 2;
    }
    return -1;
  }

  function extractMeetUrl(event) {
    var text = [event.getDescription(), event.getLocation(), event.getTitle()].join(' ');
    var match = String(text).match(/https:\/\/meet\.google\.com\/[a-zA-Z0-9\-]+/);
    if (match) return match[0];
    try {
      if (typeof Calendar !== 'undefined' && VERIFICATION_CALENDAR_ID) {
        var id = String(event.getId()).replace(/@google\.com$/, '');
        var advanced = Calendar.Events.get(VERIFICATION_CALENDAR_ID, id.split('@')[0]);
        if (advanced && advanced.hangoutLink) return advanced.hangoutLink;
      }
    } catch (err) {}
    return '';
  }

  function syncVerificationFromCalendar() {
    if (!VERIFICATION_CALENDAR_ID) {
      return { status: 'error', message: 'VERIFICATION_CALENDAR_ID is not set in Apps Script.' };
    }
    var cal = CalendarApp.getCalendarById(VERIFICATION_CALENDAR_ID);
    if (!cal) return { status: 'error', message: 'Calendar not found. Check VERIFICATION_CALENDAR_ID.' };

    var now = new Date();
    var start = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
    var end = new Date(now.getTime() + 60 * 24 * 3600 * 1000);
    var events = cal.getEvents(start, end);
    var sheet = bookingsSheet();
    var synced = 0;

    events.forEach(function (event) {
      if (VERIFICATION_EVENT_TITLE_FILTER &&
          event.getTitle().toLowerCase().indexOf(VERIFICATION_EVENT_TITLE_FILTER.toLowerCase()) === -1) {
        return;
      }
      var guests = event.getGuestList();
      var meetUrl = extractMeetUrl(event);
      var eventId = event.getId();
      guests.forEach(function (guest) {
        var email = String(guest.getEmail() || '').trim().toLowerCase();
        if (!email) return;
        if (VERIFICATION_HOST_EMAIL && email === VERIFICATION_HOST_EMAIL.toLowerCase()) return;

        var existing = null;
        var all = readBookings();
        for (var b = 0; b < all.length; b++) {
          if (all[b].email === email) existing = all[b];
        }

        var status = existing ? existing.status : 'BOOKED';
        if (status === 'BOOKED' && event.getEndTime() < now) status = 'COMPLETED';
        if (status === 'NOT_BOOKED' || status === 'BOOKING_REQUIRED') status = 'BOOKED';

        if (existing) {
          var row = findBookingRowIndex(existing.bookingId);
          if (row > 0) {
            sheet.getRange(row, 5, 1, 5).setValues([[
              status, event.getStartTime(), event.getEndTime(), meetUrl || existing.meetUrl, eventId
            ]]);
            sheet.getRange(row, 11).setValue(new Date());
          }
        } else {
          sheet.appendRow([
            Utilities.getUuid(),
            email,
            email,
            event.getTitle() || '',
            status,
            event.getStartTime(),
            event.getEndTime(),
            meetUrl,
            eventId,
            new Date(),
            new Date(),
            '',
            ''
          ]);
        }
        synced++;
      });
    });

    return { status: 'ok', synced: synced, bookings: readBookings(), escalations: readEscalations() };
  }

  function createVerificationCalendarTrigger() {
    ScriptApp.getProjectTriggers().forEach(function (t) {
      if (t.getHandlerFunction() === 'syncVerificationFromCalendar') ScriptApp.deleteTrigger(t);
    });
    ScriptApp.newTrigger('syncVerificationFromCalendar').timeBased().everyMinutes(5).create();
  }

  function setVerificationResult(payload) {
    var row = findBookingRowIndex(payload.bookingId);
    if (row < 0) return { status: 'error', message: 'Booking not found.' };
    var result = payload.result;
    if (result !== 'VERIFIED' && result !== 'FAILED' && result !== 'ESCALATED' && result !== 'BOOKING_REQUIRED') {
      return { status: 'error', message: 'Invalid result.' };
    }
    var sheet = bookingsSheet();
    sheet.getRange(row, 5).setValue(result);
    sheet.getRange(row, 11).setValue(new Date());
    sheet.getRange(row, 12).setValue(payload.notes || '');
    sheet.getRange(row, 13).setValue(payload.createdBy || '');
    return { status: 'ok' };
  }

  function escalateVerification(payload) {
    var result = setVerificationResult({
      bookingId: payload.bookingId,
      result: 'ESCALATED',
      notes: payload.notes,
      createdBy: payload.createdBy
    });
    if (result.status !== 'ok') return result;
    escalationsSheet().appendRow([
      Utilities.getUuid(),
      payload.driverId || '',
      payload.bookingId || '',
      payload.reason || '',
      payload.notes || '',
      payload.priority || 'NORMAL',
      payload.createdBy || '',
      new Date(),
      'OPEN'
    ]);
    return { status: 'ok' };
  }

  function seniorReview(payload) {
    var sheet = escalationsSheet();
    var last = sheet.getLastRow();
    if (last < 2) return { status: 'error', message: 'Escalation not found.' };
    var ids = sheet.getRange(2, 1, last - 1, 1).getValues();
    var row = -1;
    for (var i = 0; i < ids.length; i++) {
      if (String(ids[i][0]) === String(payload.escalationId)) row = i + 2;
    }
    if (row < 0) return { status: 'error', message: 'Escalation not found.' };

    var bookingId = String(sheet.getRange(row, 3).getValue());
    var decision = payload.decision;
    var escStatus = 'OPEN';
    var bookingStatus = 'ESCALATED';
    if (decision === 'APPROVE') {
      escStatus = 'RESOLVED_VERIFIED';
      bookingStatus = 'VERIFIED';
    } else if (decision === 'REJECT') {
      escStatus = 'RESOLVED_FAILED';
      bookingStatus = 'FAILED';
    } else if (decision === 'REQUEST_MORE_INFORMATION') {
      escStatus = 'MORE_INFO_REQUESTED';
      bookingStatus = 'BOOKING_REQUIRED';
    } else {
      return { status: 'error', message: 'Invalid decision.' };
    }

    sheet.getRange(row, 9).setValue(escStatus);
    setVerificationResult({
      bookingId: bookingId,
      result: bookingStatus,
      notes: payload.notes || '',
      createdBy: payload.createdBy
    });
    return { status: 'ok' };
  }
