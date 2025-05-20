import test, { expect } from '@playwright/test'

test.setTimeout(60000);
test('Salesforce Chatter', async ({ page }) => {

    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(10000);
    await page.locator("div[class='slds-r6']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("input[placeholder='Search apps or items...']").fill("Service");
    await page.locator("//mark[text()='Service']").nth(0).click();

    await page.locator("//span[text()='Cases']").click();
    await page.locator("//div[@title='New']").click();


    await page.locator("//button[@aria-label='Status']").click();
    // Using DOM Freeze method in the Dropdowd - SetTimeout(fucntion(){debugger;},5000) in Dev Console
    await page.locator("//span[@title='New']").click();

    await page.locator("//span[text()='Medium']").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Medium']").click();

    await page.locator("//button[@aria-label='Case Origin']").click();
    await page.locator("//span[@title='Phone']").click();

    await page.locator("//button[@name='SaveEdit']").click();



})