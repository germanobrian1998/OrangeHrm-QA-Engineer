// tests/e2e/pim.spec.ts
import { test, expect } from '../../fixtures/base.fixture';
import { EmployeeFactory } from '../../data/factories/employee.factory';

test.describe('PIM Reliability Suite - Docker Mode', () => {
  
  // Usamos la sesión guardada para saltar el login visual
  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('Should handle employee lifecycle with POM and Fixtures', async ({ pimPage }) => {
    const employee = EmployeeFactory.create();

    await test.step('Navigate and Create', async () => {
      await pimPage.navigateToPIM();
      await pimPage.createEmployee(employee);
    });

    await test.step('Verify in List', async () => {
      // Usando el método refactorizado que busca y valida
      await pimPage.searchAndVerifyEmployee(employee.firstName, employee.lastName);
    });
  });
});