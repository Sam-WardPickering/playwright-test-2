import { test, expect } from '@playwright/test';

test.only('Login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').click();
    await page.locator('#username').fill('tomsmith');

    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/secure/i);

    await page.pause();
    

});