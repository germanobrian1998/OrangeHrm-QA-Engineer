import { test, expect } from '../../fixtures/base.fixture';

test.describe('Visual Regression Suite', () => {
  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('PIM Dashboard Integrity Check', async ({ page, pimPage }) => {
    await pimPage.navigateToPIM();

    // 💡 PASO SENIOR: Esperar a que la tabla y los datos estén listos
    // Esto evita capturar la pantalla mientras los esqueletos de carga (skeletons) están activos
    await page.waitForSelector('.oxd-table-body');
    await page.waitForLoadState('networkidle');

    // 1. Limpieza de elementos dinámicos
    const dynamicElements = page.locator('.orangehrm-demo-floater, .oxd-text--subtitle-2');

    // 2. Validación Visual Optimizada
    await expect(page).toHaveScreenshot('pim-main-dashboard.png', {
      mask: [dynamicElements],
      threshold: 0.4,           // Un poco más de tolerancia para variaciones de antialiasing en CI
      maxDiffPixels: 500,  // Permitimos hasta un 5% de diferencia de píxeles
      animations: 'disabled',          // 🚀 CLAVE: Captura solo el viewport (1280x720) para evitar errores de altura
    });
  });
});