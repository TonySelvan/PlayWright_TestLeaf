import { test } from "@playwright/test";


test("Fetch the Portfolio", async ({page}) => {
    
    await page.goto("https://groww.in/login");
    await page.locator("#login_email1").clear();
    await page.locator("#login_email1").fill("ktselvan4029@gmail.com");
    await page.locator("//span[text()='Continue']").click();
    await page.locator("#login_password1").fill("Sowmika@18");
    await page.locator("//span[text()='Submit']").click();
    // await page.locator("//div[@class='otpinput88item']").waitFor({state : 'visible', timeout : 5000});
    await page.keyboard.press("4029");
    await page.waitForTimeout(10000);
})
