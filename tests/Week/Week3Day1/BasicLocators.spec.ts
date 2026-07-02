import test from '@playwright/test'
import { text } from 'node:stream/consumers';

test('Learn Basic Locators', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    await page.locator("#email").fill("test@gmail.com");

    // await page.locator(".inputtext _55r1 _6luy _9npi").fill("Testing"); 
    // // This will fail as there is extra characters in class value. Inbewtween space keep .dot ".inputtext._55r1._6luy._9npi"

    await page.locator("#pass").fill("Testing");
    await page.locator("button[value='1']").click();
    await page.waitForTimeout(10000);
    const pgtitle = await page.title();
    console.log(pgtitle);
}

)

test('SalesForce Login', async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    await page.locator("#username").clear();
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(10000);

    const pgtitle = await page.title();

    console.log(pgtitle);

})