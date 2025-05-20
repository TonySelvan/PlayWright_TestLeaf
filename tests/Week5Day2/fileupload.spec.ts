import test, { expect } from "@playwright/test";

test('File Uplaod Using Event Listeners/Promise', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    const fileevent = page.waitForEvent("filechooser");
    await page.locator("//input[@id='file-upload']").click();
    const fileuplaod = await fileevent;

    await fileuplaod.setFiles("tests/Playwright Locators.pdf");
    await page.locator("//input[@id='file-submit']").click();
    const filconf = page.locator("//h3[text()='File Uploaded!']");
    await expect(filconf).toBeVisible();

})


test('File Uplaod Using SetInputFiles if type=file available in DOM', async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml");
    await page.locator("//input[@type='file']").first()
    .setInputFiles("tests/Playwright Locators.pdf");
})