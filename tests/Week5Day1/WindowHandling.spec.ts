import test from "@playwright/test"


test('Amazon Window', async({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.locator("//input[@title='Search for Products, Brands and More']").fill("Mobiles");
    await page.locator("//input[@title='Search for Products, Brands and More']").press('Enter');


    // await page.keyboard.press("Enter");


})