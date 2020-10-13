import { express, puppeteer, BROWSER_OPTS } from '../../base';

const router = express.Router();

const BASE_URL = 'https://translate.google.com';

const fetchTranslatedPhonotonic = async (req, res) => {
  const browser = await puppeteer.launch(BROWSER_OPTS);
  const page = await browser.newPage();
  const { source, destination, translateText } = req.query;
  await page.goto(
    `${BASE_URL}/#view=home&op=translate&sl=${source}&tl=${destination}&text=${translateText}`
  );
  try {
    const showMoreSelector =
      '.tlid-result-transliteration-container .tlid-show-more-link';

    await page.waitForSelector(showMoreSelector, 5000);

    const showMore = await page.$(showMoreSelector);
    await showMore.click();
  } catch (e) {
    console.error(e);
  }
  const translatedDataSelector =
    '.tlid-result-transliteration-container  .tlid-transliteration-content';
  const translatedDataElement = await page.$(translatedDataSelector);
  const text = await page.evaluate(
    element => element.textContent,
    translatedDataElement
  );

  browser.close();
  res.json({
    res: text
  });
};

router.get('/fetchTranslated', fetchTranslatedPhonotonic);

export default router;
