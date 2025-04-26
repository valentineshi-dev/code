FROM ghcr.io/puppeteer/puppeteer:24.7.1

WORKDIR /app

RUN mkdir -p /app/pdf-output

# Install dependencies first (cached unless package.json changes)
COPY package*.json ./
RUN npm install

# Copy and build TypeScript
COPY . .
RUN npm run build

# Run as non-root (pptruser is predefined in the base image)
USER pptruser

EXPOSE 3000
CMD ["node", "dist/index.js"]