import { test, expect } from '@playwright/test';

test.only('Login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Login
    await page.locator('#username').click();
    await page.locator('#username').fill('tomsmith');

    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: /login/i }).click();

    // Validate login
    await expect(page.getByText('You logged into a secure area')).toBeVisible();
    await expect(page.locator('h4.subheader')).toContainText('Welcome to the Secure Area. When you are done click logout below.');

    await page.pause();

    // Logout
    await page.locator('a.button.secondary.radius:has-text("Logout")').click();

    // Validate logout
    await page.getByLabel('Username').click();
    await page.getByRole('textbox', { name: 'Username' }).fill('11');
    await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('11');

    await page.pause();
});