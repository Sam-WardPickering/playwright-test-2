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

test('Click A/B Testing Link', async () => {
    await page.click('text="A/B Testing"');

    const header = await page.textContent('h3');

    expect(header).toBe('A/B Test Control');
});

test('Verify checkbox states', async () => {
    await page.click('text="Checkboxes"');

    const checkbox = await page.isChecked('input[type="checkbox"]:first-child');

    expect(checkbox).toBe(false);
});

test.only('Test geolocation verification', async () => {
    // override context
    context = await browser.newContext({
        permissions: ['geolocation'],
        geolocation: {
            latitude: '37.774929',
            longitude: '-122.419416'
        }
    })
})