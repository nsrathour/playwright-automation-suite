import { test, expect } from '@playwright/test';

test('Valid Login Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Invalid Login Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Complete Checkout Flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add to cart
  await page.click('.inventory_item button');

  // Go to cart
  await page.click('.shopping_cart_link');

  // Checkout
  await page.click('#checkout');

  // Fill details
  await page.fill('#first-name', 'Nav');
  await page.fill('#last-name', 'Singh');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // Finish
  await page.click('#finish');

  // Verify success
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});


