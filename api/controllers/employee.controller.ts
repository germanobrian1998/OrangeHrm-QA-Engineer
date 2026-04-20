import { APIRequestContext, expect } from '@playwright/test';
import { Employee } from '../../data/models/employee.model';

export class EmployeeController {
  constructor(private request: APIRequestContext) {}

  async createEmployeeViaApi(employee: Employee) {
    const response = await this.request.post('/web/index.php/api/v2/pim/employees', {
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        employeeId: employee.employeeId,
      }
    });
    expect(response.ok()).toBeTruthy();
    return await response.json();
  }
}