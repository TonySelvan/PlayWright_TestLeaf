import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";


const logindata = parse(fs.readFileSync("Sample.csv"),{columns:true})
for(let data of logindata){
test(`CSV Data Param ${data.user}`, async({page})=>{
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill(data.user);
    // await page.locator("#username").fill(logindata[1].user); //This will only take 2nd row (1st index values)
    await page.locator("#password").fill(data.pass);
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(10000);
})
}