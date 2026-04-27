export interface Employee {
  firstName: string;
  lastName: string;
  middleName?: string;
  employeeId?: string;
  status?: 'Enabled' | 'Disabled';
  username?: string;
  password?: string;
}