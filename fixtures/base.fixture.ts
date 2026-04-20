import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PIMPage } from '../pages/pim.page';
import { EmployeeApi } from '../api/EmployeeApi';

type MyFixtures = {
  loginPage: LoginPage;
  pimPage: PIMPage;
  employeeApi: EmployeeApi;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },
  employeeApi: async ({ request }, use) => {
    await use(new EmployeeApi(request));
  },
});

export { expect } from '@playwright/test';