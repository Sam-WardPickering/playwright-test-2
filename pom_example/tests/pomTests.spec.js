import { test, expect } from '@playwright/test';
import PomManager from '../pages/PomManager';

let pm;

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
    });

    // test.afterEach(async ({ page }) => {
    //     await page.close();
    // });
    
    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!');

        // Assert value using SecurePage assert method
        // await pm.securePage.assertLoggedInMsg('You logged into a secure area!');

        // Assert value directly in test - best practice
        const message = await pm.securePage.getMessage();
        expect(message).toContain('You logged into a secure area!');
    });

    test('Login with invalid credentials', async ({ page }) => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('invalidUser', 'SuperSecretPassword!');

        // Assert value using LoginPage assert method
        // await pm.loginPage.assertErrorMsg('Your username is invalid!');

        // Assert value directly in test - best practice
        const message = await pm.loginPage.getErrorMsg();
        expect(message).toContain('Your username is invalid!');


    });

});

test.describe('Checkbox verification', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
    });

    test.only('Check and uncheck checkboxes', async () => {
        await pm.checkboxesPage.navigate();

        // Check the first checkbox
        await pm.checkboxesPage.checkCheckbox(1);

        // Verify first checkbox is checked
        await pm.checkboxesPage.assertCheckbox(1, true);

        // Check the second checkbox
        await pm.checkboxesPage.checkCheckbox(2);

        // Verify second checkbox is checked
        await pm.checkboxesPage.assertCheckbox(2, false);

    });
});