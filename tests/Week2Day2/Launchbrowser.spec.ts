import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

const browserInstance = await chromium.launch({ headless: false, channel:
"chrome" });

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");

console.log(`Running in browser: ${browserInstance.browserType().name()}`);

});


test("To launch a browser Without Defining Browser and Context", async ({page}) => {

// const browserInstance = await chromium.launch({ headless: false, channel:
// "chrome" });

// const browserContext = await browserInstance.newContext();

// const page = await browserContext.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");

});