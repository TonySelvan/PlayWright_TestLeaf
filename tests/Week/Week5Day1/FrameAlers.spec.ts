import test from "@playwright/test"


test('Alert Frame Assignment', async({page})=>{

    page.on("dialog", async(alert)=>{

        alert.accept();
        const alerttext = alert.message();
        console.log(alerttext);

    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    // await page.waitForSelector("//button[text()='Try it']")

    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click();

    // await page.locator("//button[text()='Try it']").click();


})