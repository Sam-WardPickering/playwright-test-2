// Practicing using selectors on a basic page I built

import { test, expect } from '@playwright/test';

test.only("Using selectors", async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/clickMe.html')

    // By ID
    await page.locator("#clickButton").click();

    //By class
    await page.locator(".button-style").click();

    //By tag and class
    await page.locator("button.button-style").click();

    await expect(page.locator("#counter")).toHaveCount(3);

});