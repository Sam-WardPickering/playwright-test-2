import { test, expect } from '@playwright/test';

test.describe.only('Practicing Assertions', async () => {

    test('Verify web page behaviour', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
    });
});