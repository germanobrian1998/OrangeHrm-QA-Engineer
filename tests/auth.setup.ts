// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/admin.json';

setup('authenticate', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill(process.env.ADMIN_USER || 'Admin');
  await page.getByPlaceholder('Password').fill(process.env.ADMIN_PASSWORD || 'admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 💡 CRÍTICO: Esperar a que el dashboard cargue antes de guardar el estado
  await expect(page).toHaveURL(/dashboard/);
  // Esperar a que un elemento del sidebar sea visible para confirmar que la UI cargó
  await expect(page.locator('.oxd-sidepanel')).toBeVisible();

  await page.context().storageState({ path: authFile });
});