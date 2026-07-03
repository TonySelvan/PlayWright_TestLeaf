import test, { expect } from "@playwright/test";
import { LoginPage } from "./PageObjects/LoginPage";
import { parse } from "csv-parse/sync";
import fs from "fs";

// Read and parse the CSV file at runtime
const logindata = parse(fs.readFileSync(require.resolve("../../Sample.csv")), {
  columns: true,
  skip_empty_lines: true
});


test.describe.configure({ mode: 'serial' });
test.describe("E2E Flow with SwagLabs Application", async () => {

  test("Simple Launch and Verify Title", async ({ page }) => {

    await page.goto("https://swaglabs.in/");
    await page.locator("//a[@id='pi-eqw-cart']").first().click();
    await expect(page).toHaveTitle("Enquiry Cart - Swag Labs");
  })

  test("Form Submission Using POM", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto("https://swaglabs.in/");
    await loginPage.nameField.fill("ThamaraiSelvan");
    await loginPage.emailField.first().fill("Sowmika@yahoo.com");
    await loginPage.phoneNumberField.fill("12345");
    await loginPage.messageField.fill("This is for Automation Testing");
    await loginPage.sendBtn.click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("Thank you - Swag Labs");
    await loginPage.backHomeBtn.click();
    await expect(page).toHaveURL("https://swaglabs.in/");
  })

  for (let data of logindata) {
    test(`Parameterized Form Submission for ${data.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await page.goto("https://swaglabs.in/");
      await loginPage.nameField.fill(data.name);
      await loginPage.emailField.first().fill(data.mail);
      await loginPage.phoneNumberField.fill(data.phone);
      await loginPage.messageField.fill(data.message);
      await loginPage.sendBtn.click();
      await page.waitForTimeout(2000);
      await expect(page).toHaveTitle("Thank you - Swag Labs");
      await loginPage.backHomeBtn.click();
      await expect(page).toHaveURL("https://swaglabs.in/");
    })
  }
})