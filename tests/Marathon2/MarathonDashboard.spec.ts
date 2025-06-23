import test, { expect } from "@playwright/test";
import { rootCertificates } from "tls";

let DashName: any
let token: any
let tokentype: any
let insturl: any
let leadid: any
let lastname: any
let DashId:any

function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}


test.describe.configure({ mode: 'serial' });
test.describe("E2E Automation with both API & UI", async () => {
    test("Created New Dashboard", async ({ page }) => {

        await page.goto("https://login.salesforce.com");
        await page.locator("#username").clear();
        await page.locator("#username").fill("ktselvan4029950@agentforce.com");
        await page.locator("#password").fill("testleaf@90");
        await page.locator("input[type='submit']").click();
        await page.waitForTimeout(5000);
        await page.locator("(//span[text()='Dashboards'])[1]").click();
        await page.locator("//div[@title='New Dashboard']").click();
        DashName = generateRandomString(10);
        await page.waitForTimeout(5000);
        // Switch to the dashboard creation iframe
        const dashboardFrame = await page.frameLocator('iframe[title="dashboard"]');
        await dashboardFrame.locator("#dashboardNameInput").fill(DashName);
        await dashboardFrame.locator("#submitBtn").click();
        await dashboardFrame.locator(".slds-button.doneEditing").click();
        await page.locator("(//span[text()='Dashboards'])[1]").click();
        await page.waitForTimeout(5000);

    })

    test('Generate Token Via API', async ({ request }) => {

        const resp = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Conenction": "keep-alive"
                },
                form: {
                    "grant_type": "password",
                    "client_id": "3MVG9dAEux2v1sLuMoraU3Ce3wiPlju2x0cYssvxdEoDo52S8C6FemgFg3KgGEOCSSkLcsUEovqKTt0Koed2Y",
                    "client_secret": "B097D17B1E695AA68108C52A3080077295544319CFD580C7722C93F5F92C0A33",
                    "username": "ktselvan4029950@agentforce.com",
                    "password": "testleaf@90"

                }

            }
        )
        const rbody = await resp.json();
        token = rbody.access_token;
        tokentype = rbody.token_type;
        insturl = rbody.instance_url;
        console.log(token)
    })

    test('Fetch Created Dashboard', async ({ request }) => {

        const resp = await request.get(`${insturl}/services/data/v60.0/sobjects/Dashboard`,
            {
                headers: {
                    "Authorization": `${tokentype} ${token}`,
                    "Content-Type": "application/json",
                    "Conenction": "keep-alive"
                }
            }
        )
        const rbody = await resp.json();
        var recentItems = rbody.recentItems; // Access the recentItems array
        for (let i = 0; i < recentItems.length; i++) {
            var title = rbody.recentItems[i].Title;
            if (title === DashName) {
                DashId = rbody.recentItems[i].Id;
                console.log(DashId);
                break;
                // var DashId = id;
                // pm.collectionVariables.set("DashId", id);
            }
        }

    })

    test('Delete Created Dashboard', async ({ request }) => {

        const resp = await request.delete(`${insturl}/services/data/v60.0/sobjects/Dashboard/${DashId}`,
            {
                headers: {
                    "Authorization": `${tokentype} ${token}`,
                    "Content-Type": "application/json",
                    "Conenction": "keep-alive"
                }
            }
        )
        expect(resp.status()).toBe(204);
        // const rbody = await resp.json();
        // console.log(rbody);
        // var recentItems = rbody.recentItems;
    })
})