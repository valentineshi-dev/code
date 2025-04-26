'use strict';

import { writeFileSync } from 'fs';
// console.time('browser');

import puppeteer, { Browser } from 'puppeteer';

let browser: Browser | null = null;

// Launch browser once when the server starts
export const initBrowser = async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    console.log('Browser initialized');
};

export const generatePDF = async (pdfSourceURL: string) => {
    if (!browser) throw new Error('Browser not initialized');

    console.time('source');

    const NAME = process.env.PDF_FILE_NAME || 'pdf-output';
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 16).replace(/:/g, '-');

    const page = await browser.newPage();

    try {
        await page.goto(pdfSourceURL, { waitUntil: 'networkidle0' });
        await page.emulateMediaType('screen');

        console.log(`Load and parse PDF source page "${pdfSourceURL}"`);
        console.timeEnd('source');

        console.time('generate');

        const filename = `${NAME}-${formattedDate}.pdf`;
        const path = `./pdf-output/${filename}`;
        const pdf = await page.pdf({ path, format: 'A4' });

        console.log(`PDF generated and saved to ${path}`);
        console.timeEnd('generate');

        return { pdf, filename };
    } finally {
        await page.close(); // Always close the page
    }
};

// Graceful shutdown
export const closeBrowser = async () => {
    if (browser) await browser.close();
};
