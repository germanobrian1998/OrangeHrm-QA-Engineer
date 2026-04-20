import test, { Page, Locator, expect } from "@playwright/test";
import { Employee } from "../data/models/employee.model";

export class PIMPage {
  private readonly page: Page;
  private readonly addEmployeeBtn: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly saveBtn: Locator;
  private readonly employeeListMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeListMenuItem = page.getByRole("link", { name: "PIM" });
    this.addEmployeeBtn = page.getByRole("button", { name: "Add" });
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.saveBtn = page.getByRole("button", { name: "Save" });
  }

  async navigateToPIM() {
    await this.employeeListMenuItem.click();
  }

  async createEmployee(employee: Employee) {
    await this.addEmployeeBtn.click();
    await this.firstNameInput.fill(employee.firstName);
    await this.lastNameInput.fill(employee.lastName);
    await this.saveBtn.click();

    // ESPERA CRÍTICA: Esperar a que el guardado termine y la URL cambie
    // OrangeHRM suele ir a 'viewPersonalDetails' tras guardar
    await this.page.waitForURL(/viewPersonalDetails/, { timeout: 15000 });
  }

  async verifyEmployeeExists(fullName: string) {
    const [firstName, lastName] = fullName.split(' '); // Separamos el nombre del apellido

    await this.page.getByRole('link', { name: 'Employee List' }).click();
    
    const employeeNameInput = this.page.getByPlaceholder('Type for hints...').first();
    await employeeNameInput.fill(firstName); // Buscamos solo por el primer nombre
    await this.page.getByRole('button', { name: 'Search' }).click();

    // 💡 LA CLAVE: Buscamos la fila que contiene el nombre
    // Usamos el texto del nombre para encontrar la celda específica
    const firstNameCell = this.page.getByRole('cell', { name: firstName }).first();
    const lastNameCell = this.page.getByRole('cell', { name: lastName }).first();

    await test.step('Validate employee in table cells', async () => {
        // Validamos que ambas celdas existan por separado
        await expect(firstNameCell).toBeVisible({ timeout: 10000 });
        await expect(lastNameCell).toBeVisible({ timeout: 10000 });
    });
}
}
