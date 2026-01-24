// Practicing using selectors on a basic page I built

import { test, expect } from '@playwright/test';

test.only("Using selectors", async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/clickMe.html')

    // Selecting by ID
    await page.locator("#clickButton").click();

    await page.pause();
});