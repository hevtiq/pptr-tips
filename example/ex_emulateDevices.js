const puppeteer = require("puppeteer");
// const devices = require('puppeteer/DeviceDescriptors');  // it will be changed as below
const devices = puppeteer.devices;

// emulate devices
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(devices['iPhone X']);
    await page.goto('https://pptr.dev');
    await page.waitForTimeout(5000);
    await browser.close();
})();