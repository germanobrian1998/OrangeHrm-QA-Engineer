import { test, expect } from '../../fixtures/base.fixture';
import { EmployeeFactory } from '../../data/factories/employee.factory';
import * as allure from "allure-js-commons"; // Importamos Allure

const testCases = [
  { type: 'Standard', data: EmployeeFactory.create() },
  { type: 'Long Names', data: EmployeeFactory.create({ firstName: 'Alexander-Maximilian', lastName: 'De la Santa Cruz' }) },
  { type: 'Special Chars', data: EmployeeFactory.create({ firstName: 'Jöñ', lastName: 'Smïth' }) }
];

test.describe('PIM Data Driven Suite', () => {
  test.use({ storageState: 'playwright/.auth/admin.json' });

  for (const item of testCases) {
    test(`Should create employee with ${item.type} data`, async ({ pimPage }) => {
      // Metadatos de Allure para trazabilidad
      await allure.epic("PIM Module");
      await allure.feature("Employee Management");
      await allure.story("SX-261: Create Employee with Data Variations");
      await allure.owner("Brian QA");
      await allure.tags("Regression", "PIM", "Data-Driven");
      await allure.description(`Test case focused on ${item.type} validation`);

      await pimPage.navigateToPIM();
      await pimPage.createEmployee(item.data);
      
      // Adjuntamos el ID generado al reporte para que sea fácil de encontrar
      await allure.parameter("Employee ID", item.data.employeeId!);

      await pimPage.searchAndVerifyEmployee(item.data.firstName, item.data.lastName);
    });
  }
});