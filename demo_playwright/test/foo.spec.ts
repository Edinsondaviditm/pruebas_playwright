import { test, expect } from '@playwright/test'

test('test failed', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('/');

  // Click [data-test="username"]
  await page.click('[data-test="username"]');

  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');

  // Click [data-test="password"]
  await page.click('[data-test="password"]');

  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

  // Click text=3
  await page.click('#shopping_cart_container');
 
  expect(await page.$$('.cart_item')).toHaveLength(2);
  
})

test('test success', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('/');

  // Click [data-test="username"]
  await page.click('[data-test="username"]');

  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');

  // Click [data-test="password"]
  await page.click('[data-test="password"]');

  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

  // Click text=3
  await page.click('#shopping_cart_container');
 
  expect(await page.$$('.cart_item')).toHaveLength(3);
  
})

