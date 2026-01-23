import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').click();
});