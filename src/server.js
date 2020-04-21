import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080'
    ],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://example.com');
  const content = await page.content();
  const $ = cheerio.load(content);
  console.log($('body').text());
  browser.close();
})();
