const puppeteer = require("puppeteer");
const fs = require('fs');

// accessibility test
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // visit pptr home page
    await page.goto('http://www.vnpace.com');
    await page.waitForSelector('title');

    const snapshot = await page.accessibility.snapshot();
    fs.writeFile('./recipes.json', JSON.stringify(snapshot), err => err ? console.log(err): null);

    // close browser
    await browser.close();
})();