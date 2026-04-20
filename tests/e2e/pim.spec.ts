import { test, expect } from '../../fixtures/base.fixture';
import { EmployeeFactory } from '../../data/factories/employee.factory';

test.describe('PIM Reliability Suite', () => {
  
  // 1. FUNDAMENTAL: Indicar que este archivo usa la sesión de Admin
  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('Should handle employee lifecycle without flakiness @smoke', async ({ page, pimPage }) => {
    test.slow();
    const employee = EmployeeFactory.create();

    await test.step('Navigate to Dashboard', async () => {
      // 2. FUNDAMENTAL: Debemos ir a la app primero
      await page.goto('/web/index.php/dashboard/index');
      await page.waitForLoadState('networkidle');
    });

    await test.step('Navigate to PIM and Create Employee', async () => {
      await pimPage.navigateToPIM();
      await pimPage.createEmployee(employee);
    });

    await test.step('Verify Success', async () => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      await pimPage.verifyEmployeeExists(fullName);
    });
  });
});