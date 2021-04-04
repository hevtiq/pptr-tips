const puppeteer = require("puppeteer");

// fake geolocation
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // grant permissions for geolocation change
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://pptr.dev', ['geolocation']);

    // visit pptr home page
    await page.goto('https://pptr.dev');
    await page.waitForSelector('title');

    // change geolocation to the north pole
    await page.setGeolocation({ latitude: 90, longitude: 0 });

    // close browser
    await browser.close();
})();