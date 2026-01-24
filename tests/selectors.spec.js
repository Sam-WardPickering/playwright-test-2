// Practicing using selectors on a basic page I built

import { test, expect } from '@playwright/test';

test.only("Using selectors", async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/clickMe.html')

    // By ID
    await page.locator("#clickButton").click();

    //By Class
    await page.locator(".button-style").click();

    //By Tag and Class
    await page.locator("button.button-style").click();

    // By Attribute Value
    await page.locator('[data-action="increment"]').click();

    // Alt method of using ID & Class
    await page.locator('[id="clickButton"]').click();
    await page.locator('[class="button-style"]').click();

    await expect(page.locator("#counter")).toHaveText("6");

});