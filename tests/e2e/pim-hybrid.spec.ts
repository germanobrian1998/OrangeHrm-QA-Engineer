// tests/e2e/pim-hybrid.spec.ts
import { test, expect } from '../../fixtures/base.fixture';
import { EmployeeFactory } from '../../data/factories/employee.factory';

test.describe('PIM Hybrid Suite', () => {
  
  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('Should verify employee created via API in the UI table @hybrid', async ({ page, pimPage, employeeApi }) => {
    const employee = EmployeeFactory.create();

    await test.step('PRE-CONDITION: Create employee via API', async () => {
      await employeeApi.createEmployee(employee);
    });

    await test.step('ACTION: Navigate to PIM and Search', async () => {
      await pimPage.navigateToPIM();
      
      // 💡 ESTRATEGIA SENIOR: 
      // Hacemos un reload para forzar a la aplicación a traer los datos frescos del servidor.
      // Esto evita el falso negativo si la API y la UI están en una "carrera".
      await page.reload(); 
      
      await pimPage.searchAndVerifyEmployee(employee.firstName, employee.lastName);
    });

    await test.step('ASSERT: Employee should be visible in the results', async () => {
      await expect(page.getByText(employee.firstName).first()).toBeVisible();
    });
  });
});