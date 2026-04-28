FROM mcr.microsoft.com/playwright:v1.59.1-jammy

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npx playwright install --with-deps chromium

COPY api/ ./api/
COPY core/ ./core/
COPY data/ ./data/
COPY fixtures/ ./fixtures/
COPY pages/ ./pages/
COPY playwright/ ./playwright/
COPY tests/ ./tests/

COPY playwright.config.ts .
COPY tsconfig.json .
COPY .env .

RUN chmod -R 777 /app

ENTRYPOINT ["npx", "playwright", "test"]
CMD ["--reporter=line,allure-playwright"]