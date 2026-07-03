import test, { expect } from '@playwright/test'

let token: any
let tokentype: any
let insturl: any
let leadid: any
let lastname:any

test.describe.configure({ mode: 'serial' });
test.describe("Sample API DEMO", async () => {

    test('Creating a Resource', async ({ request }) => {
        const resp = await request.post("https://jsonplaceholder.typicode.com/posts", { // Fixed URL typo here
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            data: JSON.stringify({
                title: "Thamarai",
                body: "Selvan",
                userId: 1,
            })
        });
        expect(resp.ok()).toBeTruthy();
        expect(resp.status()).toBe(201);
        const rbody = await resp.json();
        console.log("POST Response:", rbody);
    });

    test('Updating a Resource', async ({ request }) => {
        const resp = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            data: JSON.stringify({
                id: 1,
                title: "DarkNight",
                body: "Batman",
                userId: 1,
            })
        });
        expect(resp.ok()).toBeTruthy();
        expect(resp.status()).toBe(200);
        const rbody = await resp.json();
        console.log("PUT Response:", rbody);
    });

    test('Listing All Resources', async ({ request }, testInfo) => {
        const resp = await request.get("https://jsonplaceholder.typicode.com/posts", { // Fixed URL typo here
        });
        expect(resp.status()).toBe(200);
        expect(resp.ok()).toBeTruthy(); 
        const rbody = await resp.json();
        console.log("POST Response:", rbody);
        const firstFiveEntries = rbody.slice(0, 5);
        
        let outputText = "--- Printing First 5 Titles ---\n";
            for (let i = 0; i < firstFiveEntries.length; i++) {
                outputText += `Title ${i + 1}: ${firstFiveEntries[i].title}\n`;
                console.log(outputText);
            }
        await testInfo.attach('Extracted Titles List', {
                body: outputText,
                contentType: 'text/plain',
    });
    });

    test('Negative Scenario - Resource Not Found (404)', async ({ request }) => {
        const resp = await request.get("https://jsonplaceholder.typicode.com/posts/99999", {
        });
        expect(resp.status()).toBe(404);
    });

    function generateRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result; 
    }

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
                        "password": "Sowmika@2026"
    
                    }
    
                }
            )
            const rbody = await resp.json();
            token = rbody.access_token;
            tokentype = rbody.token_type;
            insturl = rbody.instance_url;
            console.log(token)
        })
    
        // test("Create Lead", async ({ request }) => {
    
        //     const resp = await request.post(`${insturl}/services/data/v60.0/sobjects/Lead`,
        //         {
        //             headers: {
        //                 "Authorization": `${tokentype} ${token}`,
        //                 "Content-Type": "application/json",
        //                 "Conenction": "keep-alive"
        //             },
        //             data: {
        //                 "salutation": "Mr",
        //                 "firstname": generateRandomString(5),
        //                 "lastname": generateRandomString(5),
        //                 "company": "SCB"
        //             }
        //         }
    
        //     )
        //     const rbody = await resp.json();
        //     leadid = rbody.id;
        //     console.log(leadid)
        // })

});