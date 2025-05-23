import { expect, test } from "@playwright/test";

test('DataParameterization', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill("TCS");
    await page.locator("#createLeadForm_firstName").fill("Tony");
    await page.locator("#createLeadForm_lastName").fill("Selvan");
    await page.locator("#createLeadForm_dataSourceId").selectOption({ label: 'Direct Mail' });
    await page.selectOption("#createLeadForm_marketingCampaignId", { label: 'Demo Marketing Campaign' });
    // await page.locator("#createLeadForm_marketingCampaignId").selectOption('Demo Marketing Campaign');
    // const drploc = await page.locator("#createLeadForm_marketingCampaignId");
    // await drploc.selectOption('Demo Marketing Campaign');
    const alldrops = await page.locator("#createLeadForm_marketingCampaignId").locator('option').all();
    console.log(alldrops.length);
    for (const drop of alldrops) {
        const drptext = await drop.textContent();
        console.log(drptext)
    }

    await page.selectOption("#createLeadForm_industryEnumId", { index: 7 });
    await page.locator("#createLeadForm_currencyUomId").selectOption('INR');
    await page.locator("#createLeadForm_generalCountryGeoId").selectOption('India');
    await page.selectOption("#createLeadForm_generalStateProvinceGeoId", 'IN-TN');
    const allstates = await page.locator("#createLeadForm_generalStateProvinceGeoId").locator('option').all();
    console.log(allstates.length);
    for (const states of allstates) {
        const statetext = await states.textContent();
        console.log(statetext)
    }

    await page.locator(".smallSubmit").click();
    // await page.waitForTimeout(5000);
    await expect(page.locator('a:has-text("Duplicate Lead")')).toBeVisible();
    // const duplead = await page.locator('a:has-text("Duplicate Lead")');



})