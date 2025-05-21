import test, { expect } from '@playwright/test'

test.setTimeout(60000);
test('New Lead', async ({ page }) => {

    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(10000);
    await page.locator("div[class='slds-r6']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("input[placeholder='Search apps or items...']").fill("Marketing");
    await page.locator("//mark[text()='Marketing']").click();
    await page.locator("a[title='Leads']").click();
    await page.locator("//div[@title='New']").click();


    function generateRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    let lname = generateRandomString(9);
    let cname = generateRandomString(5);
    let newcname = generateRandomString(5);
    await page.locator("//input[@name='lastName']").fill(lname);
    await page.locator("//input[@name='Company']").fill(cname);
    await page.locator("//button[@name='SaveEdit']").click();

    await page.locator("//li[@role='presentation']//*[local-name()='svg']//*[local-name()='g']").click();

    await page.locator("//span[text()='Convert']").click();

    await page.locator("(//button[@type='button' and @class='slds-button transparentButton'])[3]").click();

    await page.locator("//span[text()='Opportunity Name']/parent::label/following-sibling::input").click();

    await page.locator("//span[text()='Opportunity Name']/parent::label/following-sibling::input").clear();

    await page.locator("//span[text()='Opportunity Name']/parent::label/following-sibling::input").fill(newcname);

    await page.locator("//button[text()='Convert']").click();

    await expect(page.locator("//h2[text()='Your lead has been converted']")).toBeVisible();

    await page.locator("//button[text()='Go to Leads']").click();

    await page.locator("//input[@name='Lead-search-input']").clear();

    await page.waitForTimeout(5000);

    await page.locator("//input[@name='Lead-search-input']").fill(lname);

    // await page.locator("//img[@title='Leads']").click();

    // await page.locator("(//input[@type='search'])[2]").click();

    await page.keyboard.press("Enter");

    // await page.press("//input[@name='Lead-search-input']","Enter");

    await page.waitForTimeout(5000);

    await expect(page.locator("//span[text()='No items to display.']")).toBeVisible();

    await page.locator("//a[@title='Opportunities']").click();

    await page.locator("//input[@name='Opportunity-search-input']").fill(newcname);

    // await page.press("//input[@name='Opportunity-search-input']",'Enter');

    await page.keyboard.press("Enter");

    await page.waitForTimeout(10000);

    //Looping through the Table and printing values concept

    const table = await page.locator("//table[@aria-label='Recently Viewed']/tbody");

    const rows = await table.locator('tr');
    const rowcount = rows.count();
    //     console.log(rowcount);
    // expect(rowcount).toBe(1);

})

test.only('Printing Column Values', async ({ page }) => {

    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(5000);
    await page.locator("div[class='slds-r6']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("input[placeholder='Search apps or items...']").fill("Marketing");
    await page.locator("//mark[text()='Marketing']").click();
    await page.locator("//a[@title='Opportunities']").click();

    //Looping through the Table and printing values concept
    await page.waitForTimeout(5000);
    const table = page.locator("//table[@aria-label='Recently Viewed']/tbody");

    const rows = table.locator('tr');
    const rowcount = await rows.count();
    console.log(rowcount);
    const row = rows.locator("td");
    // expect(rowcount).toBe(1);

    for (let i = 0; i < rowcount; i++) {
        const colvalue = rows.nth(i).locator("td");
        // console.log("The " +i+" th row values are :");
        for(let j=0;j<await colvalue.count();j++){
            const firstcolvalue = await colvalue.nth(j).innerText();
            console.log("The " +i+ " th row " +j+ " th column value is : " + firstcolvalue);
        }
    }
})