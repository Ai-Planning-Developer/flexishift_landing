# Connecting the driver registration form to Google Sheets

This connects the FlexiShift landing site `/register` page to a live Google Sheet, so every submission appears as a new row for backoffice to review and approve. No coding experience needed — just copy, paste, and click through the steps below.

## What you'll end up with

- A Google Sheet with one tab: **Submissions** — one row per registration, with driver fields and (if present) the truck's fields on the same row.
- A **Registration Type** column with a readable value: **Driver only**, **Driver with truck**, or **Truck only**.
- **Country** and **Country Code** columns (from the phone country-code picker on the form).
- A **Status** column with a dropdown: Pending / Approved / Rejected.
- Uploaded licence and vehicle documents saved into a Google Drive folder, with links in the sheet.
- A **Password** column with the password as typed on the form (readable / plain text). Restrict who can open this spreadsheet.

The form only accepts **one truck**. Driver-only submissions leave the vehicle columns blank.

## Steps

1. Go to [sheets.new](https://sheets.new) to create a fresh Google Sheet. Rename it something like "FlexiShift Driver Registrations".

   If you already have a sheet from the previous (two-tab) script, you can keep using it. After pasting the new script, run **setupSheets** — it overwrites the Submissions header row so new columns line up. Existing old rows will not be migrated. An existing **Trucks** tab is left untouched and is no longer written to.

2. In the menu, click **Extensions → Apps Script**.

3. Delete any placeholder code you see in the editor, then paste in the entire contents of `flexishift_sheets_backend.gs` (in this folder).

4. Save the project (the disk icon, or Ctrl/Cmd+S). Give it a name like "FlexiShift Registration Backend" if asked.

5. At the top of the editor, use the function dropdown to select **setupSheets**, then click **Run**.
   - The first time, Google will ask you to authorize the script. Click through "Review permissions" → choose your account → "Advanced" → "Go to FlexiShift Registration Backend (unsafe)" → Allow. This warning is normal for your own scripts; it's just Google flagging that the script wasn't reviewed by them.
   - Check back on the Sheet — you should now see a **Submissions** tab with a bold header row.

6. Click **Deploy → New deployment**.

   If this is an **update** to an existing web app (you already had a deployment URL in `VITE_GOOGLE_SHEETS_WEBHOOK_URL`), do **not** create a brand-new deployment. Instead: **Deploy → Manage deployments → edit (pencil icon) → Version: New version → Deploy**. That keeps the same URL.

7. For a first-time deploy: click the gear icon next to "Select type" and choose **Web app**.

8. Fill in:
   - Description: e.g. "Driver registration receiver"
   - Execute as: **Me**
   - Who has access: **Anyone** (required — drivers filling out the form aren't logged into Google)

   Click **Deploy**, authorize again if asked.

9. Copy the **Web app URL** shown after deployment. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

10. Configure the landing site environment variables (do **not** edit form source for the URL).

    Locally, copy `.env.example` to `.env` (or `.env.local`) and set:

    ```env
    VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
    VITE_SUBMIT_TOKEN=
    ```

    In production hosting (Netlify, Vercel, Cloudflare Pages, etc.), add the same variables in the project’s environment settings, then redeploy so Vite can bake them into the build.

11. **Test it**: open `/register`, fill out a test registration, and submit. Within a few seconds a new row should appear in the Submissions tab. Check **Registration Type**, **Country**, **Country Code**, and (if you chose a truck option) the vehicle columns on that same row. If nothing shows up, see Troubleshooting below.

## Optional: add a shared secret

Because "Who has access: Anyone" is required for drivers to submit without a Google login, anyone who discovers the deployment URL could technically POST fake rows to your sheet. As a light extra check:

1. In `flexishift_sheets_backend.gs`, set `SECRET_TOKEN` to a long random string, e.g. `var SECRET_TOKEN = 'x7Qp2-fLsheet-92kd';`
2. In the landing site env, set `VITE_SUBMIT_TOKEN` to the exact same string.
3. Back in Apps Script: **Deploy → Manage deployments → edit (pencil icon) → Version: New version → Deploy**, so the change takes effect.
4. Rebuild/redeploy the landing site so the new token is included.

This isn't strong security (the token still travels in the public frontend bundle, so anyone determined enough could extract it) — treat it as a deterrent against random noise, not a real access control.

## Backoffice workflow

- Open the Sheet. Each new registration is a **single row** in **Submissions**, status **Pending** by default.
- **Registration Type** tells you whether the row is Driver only, Driver with truck, or Truck only.
- Click the Status cell to pick **Approved** or **Rejected** from the dropdown.
- Use the **Reviewer Notes**, **Reviewed By**, and **Reviewed At** columns to log the decision (these are free text — fill them in manually, or set up a simple Sheets formula/script later to auto-stamp them).
- Click the links in **Licence Documents** / **Vehicle Documents** to view uploaded photos and PDFs, stored in a **FlexiShift Driver Documents** folder in the same Google account's Drive.

## Security notes (please read)

- **Treat the deployment URL as a secret.** It's long and unguessable, but anyone who obtains it can submit rows. The optional token above adds a small extra check.
- **Uploaded documents are personal data** (driving licences, vehicle registration certs). The Drive folder is left at Google's default *private* sharing — only your account can see it until you deliberately share it. Share the "FlexiShift Driver Documents" folder with your backoffice team's Google accounts (or a Google Group), rather than turning on "anyone with the link."
- **No confirmation of delivery.** The form POSTs using a mode that avoids a browser security check (CORS), which means it can't read Apps Script's response back. In practice this means: if the network request goes out, the driver sees "success" — but if something is misconfigured on the Apps Script side (e.g. you pasted the URL wrong, or the script has an error), the driver won't be told it failed. Test thoroughly after any change, and spot-check the Sheet periodically.
- **Passwords are stored in plain text** in the Password column. Limit Sheet access to trusted backoffice accounts only. Google Sheets is not a login system — if you later need real authentication, passwords should be hashed in a proper backend instead.
- **Large uploads.** Apps Script accepts requests up to ~50MB. A handful of licence/vehicle photos is fine; if drivers start attaching many very large files and submissions start failing, consider compressing images before upload (not currently implemented).

## Troubleshooting

- **Nothing appears in the Sheet after submitting**: double-check the URL was set correctly in `VITE_GOOGLE_SHEETS_WEBHOOK_URL` (no extra spaces, ends in `/exec`), that you redeployed the site after changing env vars, and that you deployed Apps Script with "Execute as: Me" and "Who has access: Anyone".
- **Submission shows an error on the form**: this only happens on a genuine network failure (e.g. driver is offline). A misconfigured backend won't show an error on the form — check the Sheet directly instead.
- **Changed the script but nothing's different**: you need to create a **new version** under Deploy → Manage deployments each time you edit `flexishift_sheets_backend.gs`, otherwise the live URL keeps running the old code.
- **New columns look misaligned / old data in the wrong cells**: run **setupSheets** so row 1 matches the new headers. Old rows from the previous two-tab layout are not auto-migrated — keep them as historical data, or start a fresh sheet.
- **Env not picking up**: Vite only reads `VITE_*` variables at build/dev-server start. Restart `npm run dev` (or redeploy) after changing `.env`.
