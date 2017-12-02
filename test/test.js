const puppeteer = require('puppeteer');
const assert = require('assert');
const mochaAsync = (fn) => {
  return done => {
    fn.call().then(done, err => {
      done(err);
      browser.close();
    });
  };
};
let browser = null;
let page = null;

before(mochaAsync(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();

  await page.goto('http://localhost:9001');
  await page.content();
  await page.waitForSelector('#myModalLabel');
}));

describe('System Designer', () => {

  it('is running', mochaAsync(async () => {
    const firstPar = await page.$eval('#designer-menubar-actions', el => el.innerText);

    assert.equal('v2.1.0', firstPar.trim());
  }));
});

after(mochaAsync(async () => {
  browser.close();
}));