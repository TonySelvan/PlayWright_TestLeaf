import { faker } from '@faker-js/faker'
import test, { expect } from '@playwright/test'


let token: any
let tokentype: any
let insturl: any
let leadid: any
let lastname:any
// let fname = faker.person.firstName
// let lname = faker.person.lastName
// let cname = faker.company.buzzNoun

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

    test("Create Lead", async ({ request }) => {

        const resp = await request.post(`${insturl}/services/data/v60.0/sobjects/Lead`,
            {
                headers: {
                    "Authorization": `${tokentype} ${token}`,
                    "Content-Type": "application/json",
                    "Conenction": "keep-alive"
                },
                data: {
                    "salutation": "Mr",
                    "firstname": generateRandomString(5),
                    "lastname": generateRandomString(5),
                    "company": "SCB"
                }
            }

        )
        const rbody = await resp.json();
        leadid = rbody.id;
        console.log(leadid)
    })

    test('Fetch Created Lead',async({request})=>{

        const resp = await request.get(`${insturl}/services/data/v60.0/sobjects/Lead/${leadid}`,
            {
                headers: {
                    "Authorization": `${tokentype} ${token}`,
                    "Content-Type": "application/json",
                    "Conenction": "keep-alive"
                }
            }
        )
        const rbody = await resp.json();
        lastname = rbody.LastName;
        console.log(lastname)

    })


    test("Search Created Lead", async ({ page }) => {
        // Ensure that 'lastname' is available before proceeding
        expect(lastname, 'Lastname should be defined from previous API call').toBeTruthy();

        await page.goto("https://login.salesforce.com");
        await page.locator("#username").clear();
        await page.locator("#username").fill("ktselvan4029950@agentforce.com");
        await page.locator("#password").fill("testleaf@90");
        await page.locator("input[type='submit']").click();
        await page.waitForTimeout(5000);

        // Wait for Leads tab to be visible/clickable
        await page.locator("(//span[text()='Leads'])[1]").waitFor({ state: 'visible', timeout: 15000 });
        await page.locator("(//span[text()='Leads'])[1]").click();

        // Wait for search input to be ready
        await page.locator("//input[@name='Lead-search-input']").waitFor({ state: 'visible', timeout: 10000 });
        await page.locator("//input[@name='Lead-search-input']").click();
        await page.locator("//input[@name='Lead-search-input']").fill(lastname);
        await page.keyboard.press("Enter");
        await page.waitForTimeout(5000);

        const leadLink = page.locator(`(//a[contains(text(),'${lastname}')])[1]`);
        await leadLink.waitFor({ state: 'visible', timeout: 10000 });
        await leadLink.click();
        await page.waitForTimeout(5000);

        // Open actions menu and delete
        await page.locator("//li[@role='presentation']//*[local-name()='svg']//*[local-name()='g']").click();
        await page.locator("//span[text()='Delete']").click();
        await page.locator("//span[text()='Delete' and @class=' label bBody']").click();

        // Search again to confirm deletion
        await page.locator("//input[@name='Lead-search-input']").click();
        await page.locator("//input[@name='Lead-search-input']").clear();
        await page.locator("//input[@name='Lead-search-input']").fill(lastname);
        await page.keyboard.press("Enter");
        await expect(page.locator("//span[text()='No items to display.']")).toBeVisible();
    })
})
