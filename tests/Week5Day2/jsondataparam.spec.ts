import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import creds from "../../Sample.json"


// const logindata = parse(fs.readFileSync("Sample.csv"),{columns:true})
for(let data of creds){
test(`JSON Data Param ${data.username}`, async({page})=>{
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill(data.username);
    // await page.locator("#username").fill(creds[1].username); //This will only take 2nd row (1st index values)
    await page.locator("#password").fill(data.password);
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(2000);
})
}

const jsonparse = JSON.parse(fs.readFileSync("Sample.json",'utf-8'));

for(let datas of jsonparse){
test(`JSON Parse Data Param ${datas.username}`, async({page})=>{
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").clear();
    await page.locator("#username").fill(datas.username);
    // await page.locator("#username").fill(logindata[1].user); //This will only take 2nd row (1st index values)
    await page.locator("#password").fill(datas.password);
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(2000);
})
}
