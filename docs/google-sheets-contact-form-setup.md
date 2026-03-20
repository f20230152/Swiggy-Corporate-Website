# Google Sheets Contact Form Setup

This website is deployed as a static site on GitHub Pages, so the contact form writes to Google Sheets through a Google Apps Script web app.

## Sheet target

- Spreadsheet: `1kZqI9dfWjujDhAXV-4xn1R-HVb-FQ9MDfmR_ql7rBS0`
- Tab: `Sheet1`

## Deploy the Apps Script

1. Open the spreadsheet.
2. Go to `Extensions` -> `Apps Script`.
3. Replace the default script with the contents of [google-sheets-contact-form.gs](C:/dev/Swiggy%20Corporate%20Website/docs/google-sheets-contact-form.gs).
4. Click `Deploy` -> `New deployment`.
5. Select `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Authorize the script.
9. Copy the deployed web app URL. It will look like `https://script.google.com/macros/s/.../exec`.

## Connect the site

1. In GitHub, open the repository settings.
2. Go to `Secrets and variables` -> `Actions` -> `Variables`.
3. Add a repository variable named `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
4. Paste the Apps Script web app URL as the value.
5. Re-run the `Deploy to GitHub Pages` workflow or push a new commit.

Once that variable is set, the `Talk to our team` form will append each submission into `Sheet1`.
