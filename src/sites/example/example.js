import { express, puppeteer, cheerio, BROWSER_OPTS } from '../../base';

const router = express.Router();

const BASE_URL = 'http://example.com';

const fetchBody = async (req, res) => {
  const browser = await puppeteer.launch(BROWSER_OPTS);
  const page = await browser.newPage();
  await page.goto(BASE_URL);
  const content = await page.content();
  const $ = cheerio.load(content);
  browser.close();
  res.json({
    res: $('body').text()
  });
};

router.get('/fetchBody', fetchBody);

export default router;
