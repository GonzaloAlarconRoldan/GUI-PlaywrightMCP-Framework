const { chromium } = require('@playwright/test');
const path = require('path');

const htmlFile = process.argv[2];

if (!htmlFile) {
  console.error('Usage: node generate_pdf.js <html-file>');
  process.exit(1);
}

const absolutePath = path.resolve(htmlFile);
const pdfPath = absolutePath.replace('.html', '.pdf');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle' });
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
  await browser.close();
  console.log(pdfPath);
})();
