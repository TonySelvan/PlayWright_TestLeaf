import test from "@playwright/test";

let id :any
test('SNOW Create Incident Via PW API', async ({request }) => {


     // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    // The above can be skipped by adding REQUEST as fixture in the method

    const resp = await request.post("https://dev348063.service-now.com/api/now/table/incident",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic YWRtaW46a2hPeW8lNTdDJFFD`
            },
            data:
            {
                "description": "Testing API Via PW"
            }
        }
    )
    const respbody = await resp.json();
    console.log(await resp.json());
    id = respbody.result.sys_id;
})

test("Fetch the Resource", async({request})=>{
    const resp = await request.get(`https://dev348063.service-now.com/api/now/table/incident/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic YWRtaW46a2hPeW8lNTdDJFFD`
            },
        }
    )
    const respbody = await resp.json();
    console.log(await resp.json());
})