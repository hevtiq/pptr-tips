const puppeteer = require("puppeteer");

// screenshot a page with full page
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // networkidle0: wait until no more running requests in the browser (page fully loaded)
    await page.goto('https://www.example.com', { waitUntil: 'networkidle0'});
    await page.pdf({ path: 'example.pdf', format: 'A4' });
    await browser.close();
})();