// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test';

setup('authenticate as admin', async ({ page }) => {
  await page.goto('/');
  
  // Usamos las variables de proceso
  await page.getByPlaceholder('Username').fill(process.env.ADMIN_USER!);
  await page.getByPlaceholder('Password').fill(process.env.ADMIN_PASS!);
  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page).toHaveURL(/dashboard/);
  await page.context().storageState({ path: 'playwright/.auth/admin.json' });
});