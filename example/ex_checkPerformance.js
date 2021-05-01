const puppeteer = require("puppeteer");

// check performance
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // visit pptr home page
    await page.goto('https://pptr.dev');
    await page.waitForSelector('title');

    // Execute Navigation API within the page context
    const metrics = await page.evaluate(() => JSON.stringify(window.performance));
    console.log(JSON.parse(metrics));

    // close browser
    await browser.close();
})();