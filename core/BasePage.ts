// core/BasePage.ts
import { Page, Locator, test, expect } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Método genérico para escribir con espera integrada
    async fillInput(locator: Locator, value: string, name: string) {
        await test.step(`Fill ${name}`, async () => {
            await locator.waitFor({ state: 'visible', timeout: 10000 });
            await locator.fill(value);
        });
    }

    // Método genérico para clickear con espera
    async clickElement(locator: Locator, name: string) {
        await test.step(`Click ${name}`, async () => {
            await locator.waitFor({ state: 'visible', timeout: 10000 });
            await locator.click();
        });
    }

    // Esperar a que la página cargue completamente (útil para SPAs)
    async waitForPageLoad() {
        await test.step('Wait for page load', async () => {
            await this.page.waitForLoadState('networkidle');
        });
    }
}