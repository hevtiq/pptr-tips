const puppeteer = require("puppeteer");

// convert page into PDF file
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // networkidle0: wait until no more running requests in the browser (page fully loaded)
    await page.goto('https://www.example.com', { waitUntil: 'networkidle0'});
    await page.screenshot({ path: 'example.png', fullPage: 'true' });
    await browser.close();
})();