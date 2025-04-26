# Code Pieces

The code pieces referred from [valentineshi.dev](https://valentineshi.dev) website grouped by content type.

- [Puppeteer PDF Service](./niceties/puppeteer-pdf-service/)

## Cloning Subfolder Only

```bash
git clone --filter=blob:none --sparse https://github.com/valentineshi-dev/code.git
cd code
git sparse-checkout set <subfolder-path> # E.g. niceties/puppeteer-pdf-service for <subfolder path>
```
