# Code Pieces

The code pieces referred from my [valentineshi.dev](https://valentineshi.dev) website grouped by content type for your use.

For more OSS code refer as well to my [personal](https://github.com/WhereJuly) repository.

- [Puppeteer PDF Service](./niceties/puppeteer-pdf-service/)

## Running a Code Piece

To run some code pieces Docker and Docker Compose have to be [installed](https://docs.docker.com/engine/install/) on your system.

You may clone the desired code piece subfolder only. E.g. for Puppeteer PDF Service:

```bash
git clone --filter=blob:none --sparse https://github.com/valentineshi-dev/code.git
cd code
# Replace `niceties/puppeteer-pdf-service` with actual folder you want to have locally
git sparse-checkout set niceties/puppeteer-pdf-service
```
