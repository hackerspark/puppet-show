import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio'; // Works only with data thats retured by a request; thus puppeteer's evaluate is much more proficient

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get('/example', async (req, res) => {
  console.log('In /test');
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080'
    ]
  });
  console.log('Launched chrome');
  const page = await browser.newPage();
  await page.goto('http://example.com');
  const content = await page.content();
  const $ = cheerio.load(content);
  console.log($('body').text());
  browser.close();
  res.send($('body').text());
  console.log('/test complete');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

export default app;
