// api/EmployeeApi.ts
import { APIRequestContext, expect, test } from '@playwright/test';
import { Employee } from '../data/models/employee.model';

export class EmployeeApi {
    private readonly endpoint = '/web/index.php/api/v2/pim/employees';

    constructor(private readonly request: APIRequestContext) {}

    /**
     * Crea un empleado vía API para acelerar pre-condiciones.
     * @param employee Objeto con los datos del empleado
     * @returns El ID interno (empNumber) generado por el sistema
     */
    async createEmployee(employee: Employee): Promise<number> {
        return await test.step(`API: Create Employee [${employee.firstName} ${employee.lastName}]`, async () => {
            const response = await this.request.post(this.endpoint, {
                data: {
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    employeeId: employee.employeeId, // Usamos el ID de tu factory
                }
            });

            // Validamos éxito
            expect(response.ok(), `Failed to create employee via API. Status: ${response.status()}`).toBeTruthy();
            
            const body = await response.json();
            
            // Retornamos el empNumber (ID interno de OrangeHRM) por si necesitamos borrarlo luego
            return body.data.empNumber; 
        });
    }
}