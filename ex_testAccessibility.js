const { loadPage } = require('axe-puppeteer')
const puppeteer = require('puppeteer')

    ; (async () => {
        const browser = await puppeteer.launch()
        const axeBuilder = await loadPage(
            browser,
            'http://www.vnpace.com'
        )
        const results = await axeBuilder.analyze()
        console.log(results)

        await browser.close()
    })()