# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/pim-data-driven.spec.ts >> PIM Data Driven Suite >> Should create employee with Long Names data
- Location: tests/e2e/pim-data-driven.spec.ts:15:9

# Error details

```
TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
=========================== logs ===========================
waiting for navigation until "commit"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: FirstnameTest LastNameTest
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e147]:
      - heading "Add Employee" [level=6] [ref=e148]
      - separator [ref=e149]
      - generic [ref=e150]:
        - generic [ref=e151]:
          - generic [ref=e152]:
            - generic [ref=e154]:
              - button "Choose File"
              - generic [ref=e155]:
                - img "profile picture" [ref=e157]
                - button "" [ref=e158] [cursor=pointer]:
                  - generic [ref=e159]: 
            - paragraph [ref=e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=e161]:
            - generic [ref=e162]:
              - generic [ref=e165]:
                - generic [ref=e167]: Employee Full Name*
                - generic [ref=e168]:
                  - textbox "First Name" [ref=e171]: Alexander-Maximilian
                  - textbox "Middle Name" [ref=e174]
                  - textbox "Last Name" [ref=e177]: De la Santa Cruz
              - generic [ref=e180]:
                - generic [ref=e182]: Employee Id
                - textbox [ref=e184]: "0431"
                - generic [ref=e185]: Employee Id already exists
            - separator [ref=e186]
            - generic [ref=e187]:
              - paragraph [ref=e188]: Create Login Details
              - checkbox [ref=e191]
        - separator [ref=e193]
        - generic [ref=e194]:
          - paragraph [ref=e195]: "* Required"
          - button "Cancel" [ref=e196] [cursor=pointer]
          - button "Save" [active] [ref=e197] [cursor=pointer]
    - generic [ref=e198]:
      - paragraph [ref=e199]: OrangeHRM OS 5.8
      - paragraph [ref=e200]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e201] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | // pages/pim.page.ts
  2  | import { Page, Locator, expect,test } from "@playwright/test";
  3  | import { BasePage } from "../core/BasePage"; // Importamos el cerebro del framework
  4  | import { Employee } from "../data/models/employee.model";
  5  | 
  6  | export class PIMPage extends BasePage { // Heredamos de BasePage
  7  |   private readonly addEmployeeBtn: Locator;
  8  |   private readonly firstNameInput: Locator;
  9  |   private readonly lastNameInput: Locator;
  10 |   private readonly saveBtn: Locator;
  11 |   private readonly employeeListMenuItem: Locator;
  12 |   private readonly searchNameInput: Locator;
  13 |   private readonly searchBtn: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     super(page); // Inicializamos la clase base
  17 |     this.employeeListMenuItem = page.getByRole("link", { name: "PIM" });
  18 |     this.addEmployeeBtn = page.getByRole("button", { name: "Add" });
  19 |     this.firstNameInput = page.getByPlaceholder("First Name");
  20 |     this.lastNameInput = page.getByPlaceholder("Last Name");
  21 |     this.saveBtn = page.getByRole("button", { name: "Save" });
  22 |     this.searchNameInput = page.getByPlaceholder('Type for hints...').first();
  23 |     this.searchBtn = page.getByRole('button', { name: 'Search' });
  24 |   }
  25 | 
  26 |   async navigateToPIM() {
  27 |     await this.page.goto('/web/index.php/pim/viewEmployeeList');
  28 |   }
  29 | 
  30 |   async createEmployee(employee: Employee) {
  31 |     await this.clickElement(this.addEmployeeBtn, "Add Employee Button");
  32 |     
  33 |     await this.fillInput(this.firstNameInput, employee.firstName, "First Name");
  34 |     await this.fillInput(this.lastNameInput, employee.lastName, "Last Name");
  35 |     
  36 |     await this.clickElement(this.saveBtn, "Save Button");
  37 | 
  38 |     // 💡 MEJORA: En lugar de solo waitForURL, esperamos que la URL contenga el patrón
  39 |     // y usamos un estado de carga más permisivo ('commit' en lugar de 'load')
  40 |     await test.step('Wait for profile redirection', async () => {
> 41 |         await this.page.waitForURL(/viewPersonalDetails/, { 
     |                         ^ TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
  42 |             timeout: 20000, 
  43 |             waitUntil: 'commit' // Se dispara en cuanto el servidor responde la redirección
  44 |         });
  45 |     });
  46 |   }
  47 | 
  48 |   async searchAndVerifyEmployee(firstName: string, lastName: string) {
  49 |     await this.clickElement(this.page.getByRole('link', { name: 'Employee List' }), "Employee List Link");
  50 |     await this.fillInput(this.searchNameInput, firstName, "Search Input");
  51 |     await this.clickElement(this.searchBtn, "Search Button");
  52 | 
  53 |     const firstNameCell = this.page.getByRole('cell', { name: firstName }).first();
  54 |     const lastNameCell = this.page.getByRole('cell', { name: lastName }).first();
  55 | 
  56 |     // Las validaciones finales (expect) se mantienen explícitas
  57 |     await expect(firstNameCell).toBeVisible({ timeout: 10000 });
  58 |     await expect(lastNameCell).toBeVisible({ timeout: 10000 });
  59 |   }
  60 | }
```