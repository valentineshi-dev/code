## Puppeteer PDF Service

Refer to my [writing]([https://valentineshi.dev/content/niceties/PH94JafySQuZTv3MS-jOMg/puppeteer-pdf-service](https://valentineshi.dev/content/deliverables/JnM6qbNDSw-T8s81cMjNtA/puppeteer-pdf-service#running-the-service)) on valentineshi.dev for details.

To name the outgoing PDF file, create the `.env` file in the root directory of cloned folder. See `example.env` for details. The PDF file name will have the date-time suffix like `your-pdf-output-2025-01-14T12-43.pdf`.

Run the service Docker container with the following command. Option `--build` will build the image off the `Dockerfile` and run the container in the current terminal. Use it when you first build the image or change the code. 

Option `-d` (not shown) will run the container in the background ([detached](https://docs.docker.com/reference/cli/docker/container/run/#detach) mode).

```bash
docker compose -f pdf.compose.yml up --build
```
