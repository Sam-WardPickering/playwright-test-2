import { test, expect } from '@playwright/test';

test.describe.only('Practicing Assertions', async () => {
    const url = 'https://the-internet.herokuapp.com/';

    test('Verify web page behaviour', async ({ page }) => {
        await page.goto(url);

        // Assert URL
        await expect(page).toHaveURL(url);

        // Assert title
        await expect(page).toHaveTitle('The Internet');

    });

    test('Continue with assertions', async ({ page }) => {
        await page.goto(url);
        
        // Assert visibility
        await expect(page.locator('h1')).toBeVisible();

        //Assert element text
        await expect(page.locator('h2')).toHaveText('Available Examples');

        // Assert contains text
        await expect(page.locator('body')).toContainText('WYSIWYG');
    });

    test.only('Continue with assertions part 2', async ({ page }) => {
        await page.goto(url);

        // Assert count
        await expect(page.locator('a')).toHaveCount(46); 
    });
});