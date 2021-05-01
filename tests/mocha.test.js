// ES5
// const puppeteer = require('puppeteer');

// ES6
import puppeteer from 'puppeteer';
import Homepage from './homepage';

describe('Loads URL', () => {
    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.setDefaultTimeout(7000);
    });

    after(async () => {
        await browser.close();
    });

    it('should work', async () => {
        const homepage = new Homepage(page);
        await homepage.visit();
    });

    it('step 2', async () => {
        await page.waitForSelector('#FAIL');
    });

    it('step 3', async () => {
        await page.waitForSelector('#FAIL');
    });
});