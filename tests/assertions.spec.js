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

    test('Continue with assertions part 2', async ({ page }) => {
        await page.goto(url);

        // Assert count
        await expect(page.locator('a')).toHaveCount(46); 

        // Assert checked
        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();

        await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();

    });

    test('Continue with assertions part 3', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');

        // Assert value
        await page.locator('#username').fill('tomsmith');
        await expect(page.locator('#username')).toHaveValue('tomsmith');

        // Assert enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();

    });

    test('Continue with assertions part 4', async ({ page }) => {
        page.goto(url);

        // Verify variable content
        const headerText = await page.locator('h1').textContent();
        expect(headerText).toBe('Welcome to the-internet');
    });
});