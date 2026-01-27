import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

let browser;
let context;
let page;

test.beforeAll(async () => {
    // Launch chrome browser before all tests
    browser = await chromium.launch();
    console.log("BEFORE ALL HOOK LAUNCHED CHROMIUM BROWSER");
});

test.beforeEach(async () => {
    // Create context for a browser
    context = await browser.newContext();

    // Create new page
    page = await context.newPage();

    // Navigate to test URL
    await page.goto('/');

    // Pause execution
    await page.pause();

    console.log("BEFORE EACH HOOK LAUNCHED NEW PAGE")
});

test.afterEach(async () => {
    // Close page & context
    await page.close();
    await context.close();

    console.log("AFTER EACH HOOK CLOSED PAGE")
});

test.afterAll(async () => {
    // Close browser
    await browser.close();
});