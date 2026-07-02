
let browserName = "Chrome";

function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log('Launching the Chrome Browser')
    }
    else if (browserName === "Edge") {
        console.log('Launching the Edge Browser')
    }
    else {
        console.log('Launching Some Other Browser')
    }
}

launchBrowser("Edge");

const browserversion = "chrome"

function getbrowserversion() {

    if (browserversion === "chrome") {  //== in JS in loose equality. === means strict equality which compares data type and also case sensitive
        let browserversion = 'edge';
        console.log(browserversion);
    }
    console.log(browserversion);
}
getbrowserversion();
console.log(browserversion);

function runTest(testType) {
    switch (testType) {
        case "Smoke":
            console.log("Smoke Test Pack is Running");
            break;
        case "Sanity":
            console.log("Sanity Test Pack is Running");
            break;
        case "Regression":
            console.log("Regression Test Pack is Running");
            break;
        default:
            console.log("No Test Pack is Running");
    }
}

runTest("Regression")