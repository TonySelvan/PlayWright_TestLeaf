//***************************  Assignment 1 *******************//

import test from '@playwright/test'

test('Assingment1', async({page}) =>{

    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(10000);

    await page.locator("div[class='slds-r6']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("//p[text()='Leads']").click();
    await page.locator("//div[@title='New']").click();
    
})