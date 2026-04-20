import { test, expect } from '../../fixtures/base.fixture';

test.describe('PIM Hybrid Suite', () => {
    test.use({ storageState: 'playwright/.auth/admin.json' });

    test('Should edit an employee created via API @fast', async ({ page, pimPage, employeeApi }) => {
        const name = "API_User";
        const lastName = "Test";
        const empId = Date.now().toString().slice(-4);

        // 1. Setup veloz: Crear empleado por API
        await test.step('API Setup: Create employee', async () => {
            await employeeApi.createEmployeeViaApi(name, lastName, empId);
        });

        // 2. Acción UI: Ir directamente a la lista y editar
        await page.goto('/web/index.php/pim/viewEmployeeList');
        
        await test.step('UI Action: Edit employee', async () => {
            await pimPage.verifyEmployeeExists(`${name} ${lastName}`);
            // Aquí irían tus pasos de edición...
        });
    });
});