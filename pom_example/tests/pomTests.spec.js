import { test, expect } from '@playwright/test';
import PomManager from '../pages/PomManager';

let pm;

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new LoginPage(page);
    });
    
    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!');
    });

});