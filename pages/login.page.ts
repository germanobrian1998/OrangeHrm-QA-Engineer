// pages/login.page.ts
import { Page, Locator } from "@playwright/test";
import { BasePage } from "../core/BasePage"; 

export class LoginPage extends BasePage { 
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page); 
    // Mantenemos tus excelentes selectores de Role y Placeholder
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async navigate() {
    // Usamos el '/' para que tome la BaseURL de tu config
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    // Ahora usamos los métodos heredados de BasePage
    await this.fillInput(this.usernameInput, user, "Username");
    await this.fillInput(this.passwordInput, pass, "Password");
    await this.clickElement(this.loginButton, "Login Button");
    
    // Agregamos una espera extra para que el Dashboard termine de cargar
    await this.waitForPageLoad();
  }
}