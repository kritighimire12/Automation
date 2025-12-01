import { test, expect } from '@playwright/test';

test.describe('Sauce Demo Login Tests', () => {

  // This runs before every test in this group to open the page
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // 1. Successful Login
  test('Login successfully with valid credentials', async ({ page }) => {
    // Fill in the username and password
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    await page.locator('[data-test="login-button"]').click();

    // Verify successful login by checking the URL
    await expect(page).toHaveURL(/.*inventory.html/);
    await page.waitForTimeout(3000);
  });
  // Login-failed
  test('Show error for invalid password', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password'); // wrong password
    await page.locator('[data-test="login-button"]').click();

    await page.waitForTimeout(3000);

  });
});