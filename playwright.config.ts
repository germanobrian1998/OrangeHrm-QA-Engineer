import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  // 💡 CAMBIO: Desactivamos el paralelo total para evitar que los tests se pisen 
  // entre sí en la misma sesión de OrangeHRM.
  fullyParallel: false, 
  
  forbidOnly: !!process.env.CI,
  
  // 💡 CAMBIO: Retries siempre en 1 para manejar el "flakiness" de la red.
  retries: 1, 

  // 💡 CAMBIO: Forzamos 1 worker para estabilidad en Docker/OrangeHRM.
  workers: 1, 

  timeout: 60000, 

  reporter: [
    ['html'],
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['list'],
    ['github'],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    trace: 'retain-on-failure',
    screenshot: 'on', // Cambiamos a 'on' para que Allure siempre tenga evidencia
    video: 'on-first-retry',
    actionTimeout: 15000, // Aumentamos un poco el tiempo de acción
    launchOptions: {
      slowMo: 300, // Bajamos un poco el slowMo para no penalizar tanto el tiempo
    },
  },

  expect: {
    timeout: 15000, // Aumentamos el tiempo de espera de las validaciones
    // Configuración para Visual Regression
    toHaveScreenshot: {
      maxDiffPixels: 100,
      threshold: 0.2,
    },
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Asegúrate de que este path coincida con el de tu auth.setup.ts
        storageState: 'playwright/.auth/admin.json', 
      },
      dependencies: ['setup'],
    },
  ],
});