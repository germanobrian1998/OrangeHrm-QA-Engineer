// pages/pim.page.ts
import { Page, Locator, expect, test } from "@playwright/test";
import { BasePage } from "../core/BasePage";
import { Employee } from "../data/models/employee.model";
import { SidebarComponent } from "./components/sidebar.component"; // 💡 Importación del componente

export class PIMPage extends BasePage {
  // Componentes
  readonly sidebar: SidebarComponent; // 💡 Definimos el componente como propiedad

  // Selectores de la página
  private readonly addEmployeeBtn: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly saveBtn: Locator;
  private readonly searchNameInput: Locator;
  private readonly searchBtn: Locator;
  private readonly employeeListTab: Locator;

  constructor(page: Page) {
    super(page);
    this.sidebar = new SidebarComponent(page); // 💡 Instanciamos el sidebar

    this.addEmployeeBtn = page.getByRole("button", { name: "Add" });
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.saveBtn = page.getByRole("button", { name: "Save" });
    this.searchNameInput = page.getByPlaceholder("Type for hints...").first();
    this.searchBtn = page.getByRole("button", { name: "Search" });
    this.employeeListTab = page.getByRole("link", { name: "Employee List" });
  }

  /**
   * 💡 Refactor: Delegamos la navegación al SidebarComponent.
   * Esto es mucho más realista que un .goto() directo, ya que prueba
   * que el menú lateral realmente funciona.
   */
  // pages/pim.page.ts

  async navigateToPIM() {
    await test.step("Navegando al módulo PIM", async () => {
      if (!this.page.url().includes("/web/index.php")) {
        await this.page.goto("/web/index.php/dashboard/index");
      }

      // 💡 El mensaje va AQUÍ, en el expect, no en el toBeVisible
      await expect(
        this.page.locator(".oxd-sidepanel"),
        "La sesión se perdió o el Sidebar no cargó",
      ).toBeVisible({ timeout: 15000 });

      await this.sidebar.goToPIM();
    });
  }

  async createEmployee(employee: Employee) {
    await this.clickElement(this.addEmployeeBtn, "Add Employee Button");

    await this.fillInput(this.firstNameInput, employee.firstName, "First Name");
    await this.fillInput(this.lastNameInput, employee.lastName, "Last Name");

    await this.clickElement(this.saveBtn, "Save Button");

    await test.step("Wait for profile redirection", async () => {
      await this.page.waitForURL(/viewPersonalDetails/, {
        timeout: 20000,
        waitUntil: "commit",
      });
    });
  }

  async searchAndVerifyEmployee(firstName: string, lastName: string) {
    // 💡 Tip Senior: Usamos los tabs internos del módulo PIM
    await this.clickElement(this.employeeListTab, "Employee List Tab");

    await this.fillInput(this.searchNameInput, firstName, "Search Input");
    await this.clickElement(this.searchBtn, "Search Button");

    const firstNameCell = this.page
      .getByRole("cell", { name: firstName })
      .first();
    const lastNameCell = this.page
      .getByRole("cell", { name: lastName })
      .first();

    await expect(firstNameCell).toBeVisible({ timeout: 10000 });
    await expect(lastNameCell).toBeVisible({ timeout: 10000 });
  }
}
