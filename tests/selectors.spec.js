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

    // Partial Attribute 
    await page.locator('[role*="but"]').click();

    // By text content
    await page.locator('text=CLICK ME').click();

    // Class + text - find exact text match
    await page.locator('.button-style:text("CLICK ME")').click();

    // Find elements containing specific text
    await page.locator('button:has-text("click m")').click();

    // Attribute & text
    await page.locator('[data-action="increment"]:text("CLICK ME")').click();

    // Playwright locators
    await page.getByText("CLICK ME", { exact: true }).click();
    await page.getByRole("button", { name: "CLICK ME" }).click();

    await expect(page.locator("#counter")).toHaveText("13");

});