import { test, expect } from '@playwright/test';

test.describe('Sauce Demo Login Tests', () => {

  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // 1. Successful Login
  test('Login successfully with valid credentials', async ({ page }) => {
    // Fill in the username and password
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    await page.locator('[data-test="login-button"]').click();
    
    await page.waitForTimeout(3000);
  });
  // Login-failed
  test('Show error for invalid password', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password'); 
    await page.locator('[data-test="login-button"]').click();

    await page.waitForTimeout(3000);

  });
});