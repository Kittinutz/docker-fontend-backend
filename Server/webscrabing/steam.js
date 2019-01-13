const puppeteer = require('puppeteer')
const puppeteerLaunch = async () => puppeteer.launch({
  executablePath: process.env.CHROME_BIN || null,
  args: ['--no-sandbox', '--disable-gpu']
})

const scrapLazada = async () => {
  const browser = await puppeteerLaunch()
  try {
    const page = await browser.newPage()
    await page.goto('https://store.steampowered.com/?l=thai')
    
  } catch (err) {
    console.error(err)
  } finally {
    await browser.close()
  }
}

module.exports = {
  scrapLazada
}