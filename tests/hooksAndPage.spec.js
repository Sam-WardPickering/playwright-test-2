import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

let browser;
let context;
let page;

test.describe('Describe block for hooks', () => {

    test.beforeAll(async () => {
        // Launch chrome browser before all tests
        browser = await chromium.launch({
            headless: true
        });
        
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
        await page.pause();
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
        console.log('AFTER ALL HOOK CLOSED BROWSER');
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


    test('Test geolocation verification', async () => {
        const latitude = 37.774929;
        const longitude = -122.419416;

        // override context
        context = await browser.newContext({
            permissions: ['geolocation'],
            geolocation: {
                latitude: latitude,
                longitude: longitude
            },
            viewport: {
                width: 1280,
                height: 720
            }
        });

        page = await context.newPage();

        console.log("USING CONTEXT AND PAGE CREATED WITHIN TEST & NOT WITHIN HOOKS");

        await page.goto('/geolocation');

        await page.click('button');

        const pageLat = await page.textContent('#lat-value');
        const pageLong = await page.textContent('#long-value');

        expect(parseFloat(pageLat)).toBeCloseTo(latitude);
        expect(parseFloat(pageLong)).toBeCloseTo(longitude);

    });

});