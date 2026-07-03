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

test.beforeEach('Login to SwagLabs', async ({ page }) => {
    console.log("Running Before Each Test")
    await page.goto("https://swaglabs.in/");
    await page.waitForTimeout(1000);
})

test("Simple Launch and Verify Title", async ({ page }) => {

    await page.locator("//a[@id='pi-eqw-cart']").first().click();
    await expect(page).toHaveTitle("Enquiry Cart - Swag Labs");
})

test.afterEach('Fetch Each Test Status', async ({ page }, testinfo) => {
    await page.close();
    console.log("Running After Each Test")
    console.log(testinfo.status);

})

test.afterAll(`Upload the attachments`, async () => {
    console.log("Running after all test")
    console.log(`the reports and screenshots are uploaded in test management tool`)
})