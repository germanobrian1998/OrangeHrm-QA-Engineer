import { APIRequestContext, expect } from '@playwright/test';

export class EmployeeApi {
    constructor(private request: APIRequestContext) {}

    async createEmployeeViaApi(firstName: string, lastName: string, employeeId: string) {
        const response = await this.request.post('/web/index.php/api/v2/pim/employees', {
            data: {
                firstName,
                lastName,
                employeeId,
            }
        });
        
        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        return body.data; // Retorna los datos del empleado creado (ID interno, etc.)
    }
}