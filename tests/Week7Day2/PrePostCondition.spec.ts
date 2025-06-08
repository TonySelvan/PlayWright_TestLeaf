import test, { expect, TestInfo } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

let logindata: any

test.beforeAll('Reading the Data', async () => {
    console.log("Running Before All Test")
    logindata = parse(fs.readFileSync("Sample.csv"),
        {
            columns: true,
            skip_empty_lines: true
        })
})

test.beforeEach('Login to Salesforce', async ({ page }) => {
    console.log("Running Before Each Test")
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill(logindata[0].user);
    await page.locator("#password").fill(logindata[0].pass);
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(5000);
})

test('Create Leads', async ({ page }) => {
    console.log("Running the Test")
    // await page.locator("a[title='Leads']").click();
    // await page.locator("//div[@title='New']").click();
    console.log(await page.title())
})

test('Create Opprtunity',async({page})=>{
    console.log("Running the Test")
    await page.locator("//a[@title='Opportunities']").click();
    console.log(await page.title())
})

test.afterEach('Fetch Each Test Status',async({},testinfo)=>{
    console.log("Running After Each Test")
    console.log(testinfo.status);

})

test.afterAll(`Upload the attachments`, async () => {
    console.log("Running after all test")
    console.log(`the reports and screenshots are uploaded in test management tool`)
})