import test, { expect } from "@playwright/test";

test.describe("Simple Google Search FLow", async () => {
    test("Launch Google", async ({ page }) => {

        await page.goto("https://google.com");
        await page.locator("#APjFqb").clear();
        await page.locator("#APjFqb").fill("Automation Tetsing Demo");
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000);
        })
})