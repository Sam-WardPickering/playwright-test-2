import { test, expect } from '@playwright/test';

test.describe.only('Practicing Assertions', async () => {

    test('Verify web page behaviour', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');

        // Assert URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

        // Assert title
        await expect(page).toHaveTitle('The Internet');

    });

    test.only('Continue with assertions', async ({ page }) => {
        // Assert visibility
        await expect(page.locator('h1')).toBeVisible();
    });
});