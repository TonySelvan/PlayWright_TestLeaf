import test from "@playwright/test";

test('Learning Alrets',async({page})=>{


    //Always declare the Alert handling at initial steps of the tests
    //page.once --> This will work only for the 1st alert in the test and others will CANCEL as by PW defaults alert cancellation.
    // We can also handle Alerts using if loop. i.e if alert.type is / alert.message --> accept/reject
    page.on('dialog',async (alert) =>{
        alert.accept("Thamarai Selvan");
        const alerttype = alert.type();
        console.log(alerttype);
        const alertmessage = alert.message();
        console.log(alertmessage);
    })

    await page.goto("https://www.leafground.com/alert.xhtml");

    await page.waitForTimeout(5000)

    await page.locator("//span[text()='Show']").nth(4).click();

    await page.waitForTimeout(5000)

})