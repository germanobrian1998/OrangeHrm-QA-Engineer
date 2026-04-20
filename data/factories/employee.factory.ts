import { Employee } from '../models/employee.model';
import { faker } from '@faker-js/faker'; // Senior Tip: faker es estándar en la industria

export class EmployeeFactory {
  static create(overrides?: Partial<Employee>): Employee {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      ...overrides,
    };
  }
}