import { faker } from '@faker-js/faker';
import { Employee } from '../models/employee.model';

export class EmployeeFactory {
  static create(overrides?: Partial<Employee>): Employee {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric(5),
      ...overrides, // Permite forzar valores específicos si el test lo requiere
    };
  }
}