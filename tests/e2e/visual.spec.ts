import { test, expect } from '../../fixtures/base.fixture';

test.describe('Visual Regression Suite', () => {
  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('PIM Dashboard Integrity Check', async ({ page, pimPage }) => {
    await pimPage.navigateToPIM();

    // 1. Limpieza: Ocultamos elementos dinámicos que cambian (relojes, banners de demo)
    // para evitar falsos negativos.
    const dynamicElements = page.locator('.orangehrm-demo-floater, .oxd-text--subtitle-2');

    // 2. Validación Visual
    await expect(page).toHaveScreenshot('pim-main-dashboard.png', {
      mask: [dynamicElements], // Estos elementos se verán como bloques rosas en la captura
      threshold: 0.2,
      maxDiffPixelRatio: 0.02, 
      fullPage: true          // Captura todo el scroll
    });
  });
});