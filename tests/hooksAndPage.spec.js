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