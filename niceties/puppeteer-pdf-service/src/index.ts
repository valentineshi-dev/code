'use strict';

import express from 'express';
import cors from 'cors';

import { initBrowser, generatePDF, closeBrowser } from './pdf.service.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:4321',  // Allow only requests from this origin
}));

app.use(express.json());

// Initialize browser on startup
await initBrowser().catch(err => {
    console.error('Failed to launch browser:', err);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', closeBrowser);
process.on('SIGINT', closeBrowser);

app.post('/pdf', async (req, res) => {
    const pdfSourceURL = req.body.url; // Access the URL from the parsed JSON

    try {
        const { pdf, filename } = await generatePDF(pdfSourceURL);

        res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
        res.setHeader('Content-Disposition', `inline; filename="${filename}"`); // Optional: to prompt a file download
        res.setHeader('Content-Length', pdf.length); // Set the correct content length
        res.setHeader('Content-Type', 'application/pdf');

        res.sendFile(`/app/pdf-output/${filename}`);
    } catch (err) {
        res.status(500).send(err instanceof Error ? err.message : 'PDF generation failed');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} (v0.0.4)`));