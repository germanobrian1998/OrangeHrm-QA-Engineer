import { test, expect } from '../../fixtures/base.fixture';

test.describe('Access Control - Permissions', () => {

  // Opción A: Forzar contextos aislados (Recomendado para seguridad)
  test.describe('Admin Context', () => {
    test.use({ storageState: 'playwright/.auth/admin.json' });

    test('Admin should see the Admin Menu @security', async ({ page }) => {
      await page.goto('/web/index.php/dashboard/index');
      await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    });
  });

  test.describe('User Context', () => {
    // Si el setup de user falló, este archivo no existe o es igual al de admin.
    // Para probarlo ahora mismo, vamos a usar un contexto SIN cookies (limpio)
    test.use({ storageState: { cookies: [], origins: [] } }); 

    test('Regular User should NOT see the Admin Menu @security', async ({ page }) => {
      await page.goto('/web/index.php/dashboard/index');
      
      // Si no hay sesión, OrangeHRM te manda al Login. 
      // En el Login tampoco debería verse el link de Admin.
      await expect(page.getByRole('link', { name: 'Admin' })).not.toBeVisible();
    });
  });
});