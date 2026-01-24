// Practicing using selectors on a basic page I built

import { test, expect } from '@playwright/test';

test.only("Using selectors", async ({ page }) => {
    let clickCount = 0;

    await page.goto('http://127.0.0.1:5500/clickMe.html')

    // By ID
    await page.locator("#clickButton").click();
    ++clickCount;

    //By Class
    await page.locator(".button-style").click();
    ++clickCount;

    //By Tag and Class
    await page.locator("button.button-style").click();
    ++clickCount;

    // By Attribute Value
    await page.locator('[data-action="increment"]').click();
    ++clickCount;

    await expect(page.locator("#counter")).toHaveText("4");

});