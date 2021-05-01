// ES5
// const puppeteer = require('puppeteer');

// ES6
import puppeteer from 'puppeteer';
import Homepage from './homepage';
import { step } from 'mocha-steps';

describe('Mocha steps test', () => {
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

    step('should load homepage', async () => {
        const homepage = new Homepage(page);
        await homepage.visit();
    });

    step('step 2', async () => {
        await page.waitForSelector('#FAIL');
    });

    step('step 3', async () => {
        await page.waitForSelector('#FAIL');
    });
});