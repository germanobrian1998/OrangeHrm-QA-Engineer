// pages/pim.page.ts
import { Page, Locator, expect,test } from "@playwright/test";
import { BasePage } from "../core/BasePage"; // Importamos el cerebro del framework
import { Employee } from "../data/models/employee.model";

export class PIMPage extends BasePage { // Heredamos de BasePage
  private readonly addEmployeeBtn: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly saveBtn: Locator;
  private readonly employeeListMenuItem: Locator;
  private readonly searchNameInput: Locator;
  private readonly searchBtn: Locator;

  constructor(page: Page) {
    super(page); // Inicializamos la clase base
    this.employeeListMenuItem = page.getByRole("link", { name: "PIM" });
    this.addEmployeeBtn = page.getByRole("button", { name: "Add" });
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.saveBtn = page.getByRole("button", { name: "Save" });
    this.searchNameInput = page.getByPlaceholder('Type for hints...').first();
    this.searchBtn = page.getByRole('button', { name: 'Search' });
  }

  async navigateToPIM() {
    await this.page.goto('/web/index.php/pim/viewEmployeeList');
  }

  async createEmployee(employee: Employee) {
    await this.clickElement(this.addEmployeeBtn, "Add Employee Button");
    
    await this.fillInput(this.firstNameInput, employee.firstName, "First Name");
    await this.fillInput(this.lastNameInput, employee.lastName, "Last Name");
    
    await this.clickElement(this.saveBtn, "Save Button");

    // 💡 MEJORA: En lugar de solo waitForURL, esperamos que la URL contenga el patrón
    // y usamos un estado de carga más permisivo ('commit' en lugar de 'load')
    await test.step('Wait for profile redirection', async () => {
        await this.page.waitForURL(/viewPersonalDetails/, { 
            timeout: 20000, 
            waitUntil: 'commit' // Se dispara en cuanto el servidor responde la redirección
        });
    });
  }

  async searchAndVerifyEmployee(firstName: string, lastName: string) {
    await this.clickElement(this.page.getByRole('link', { name: 'Employee List' }), "Employee List Link");
    await this.fillInput(this.searchNameInput, firstName, "Search Input");
    await this.clickElement(this.searchBtn, "Search Button");

    const firstNameCell = this.page.getByRole('cell', { name: firstName }).first();
    const lastNameCell = this.page.getByRole('cell', { name: lastName }).first();

    // Las validaciones finales (expect) se mantienen explícitas
    await expect(firstNameCell).toBeVisible({ timeout: 10000 });
    await expect(lastNameCell).toBeVisible({ timeout: 10000 });
  }
}