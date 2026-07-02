import test, { chromium, firefox, webkit } from "@playwright/test"

test ("launchbrowser", async() =>{

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page = await context.newPage();

    page.goto("https://playwright.dev/docs/test-typescript");

    await page.waitForTimeout(10000)

    const pgtitle = await page.title();

    console.log(pgtitle);
}
)
