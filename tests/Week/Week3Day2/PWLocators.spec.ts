import test from '@playwright/test'

test('Learn PW Locators', async ({page}) =>{

await page.waitForTimeout(4000.);

await page.goto("https://parabank.parasoft.com/parabank/index.htm");

await page.getByText("Admin Page").nth(5).click();

await page.reload()


})