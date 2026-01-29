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
        await pm.securePage.assertLoggedInMsg('You logged into a secure area!');
    });

});