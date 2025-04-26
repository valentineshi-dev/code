## Puppeteer PDF Service

Refer to my [writing](https://valentineshi.dev/content/niceties/PH94JafySQuZTv3MS-jOMg/puppeteer-pdf-service) on valentineshi.dev for details.

To name the outgoing PDF file, create the `.env` file in the root directory of cloned folder. See `example.env` for details. The PDF file name will have the date-time suffix like `your-pdf-output-2025-01-14T12-43.pdf`.

Run the service Docker container with the following command. Option `--build` will build the image off the `Dockerfile`.

```bash
docker compose -f pdf.compose.yml up --build
```
