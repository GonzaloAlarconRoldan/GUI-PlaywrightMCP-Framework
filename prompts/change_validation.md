Validate or reproduce the issue described in the user request.

## If a GitHub URL is provided:

1. Use WebFetch to read the GitHub issue from the URL in the user request.
2. Extract: title, description, steps to reproduce, expected vs actual behavior.
3. If there are linked PRs or commits, fetch those too for additional context.

## Execution:

1. Read existing knowledge and configuration first.
2. Navigate to the relevant section of the application based on the issue.
3. Follow the steps that trigger the issue.
4. Capture screenshots as evidence at each relevant step.
5. Log any console errors.

## Report:

- Issue title and summary (from GitHub if URL was provided)
- Steps executed
- Actual result observed
- Screenshots
- Verdict: Reproduced / Not reproduced / Cannot reproduce (reason)

Save the HTML report in reports/generated/.

After saving the HTML report, generate the PDF by running:
`node generate_pdf.js reports/generated/<report-name>.html`

The PDF path will be printed to stdout.
