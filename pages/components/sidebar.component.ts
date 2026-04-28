// pages/components/sidebar.component.ts
import { Locator, Page, expect } from '@playwright/test';

export class SidebarComponent {
  readonly page: Page;
  private readonly adminModule: Locator;
  private readonly pimModule: Locator;
  private readonly leaveModule: Locator;

  constructor(page: Page) {
    this.page = page;
    
    /**
     * 💡 TIP SENIOR: En OrangeHRM, los items del menú tienen la clase .oxd-main-menu-item.
     * Usar 'hasText' asegura que seleccionamos el link correcto dentro de la lista del sidebar.
     */
    this.adminModule = page.locator('.oxd-main-menu-item', { hasText: 'Admin' });
    this.pimModule = page.locator('.oxd-main-menu-item', { hasText: 'PIM' });
    this.leaveModule = page.locator('.oxd-main-menu-item', { hasText: 'Leave' });
  }

  async goToAdmin() {
    // Esperamos a que sea visible para evitar clics en elementos que aún se están animando
    await expect(this.adminModule).toBeVisible({ timeout: 10000 });
    await this.adminModule.click();
  }

  async goToPIM() {
    // 💡 Esta espera previa elimina el 90% de los errores de "Timeout exceeded" en Docker
    await expect(this.pimModule).toBeVisible({ timeout: 10000 });
    await this.pimModule.click();
    
    // Opcional: Validar que la navegación comenzó
    await this.page.waitForLoadState('domcontentloaded');
  }
}