const puppeteer = require('puppeteer');
const expect = require('chai').expect;

let browser = null;
let page = null;

describe('System Designer', function () {

  this.timeout(5000);

  before(async () => {
    browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      args: [
        '--disable-setuid-sandbox',
        '--no-sandbox',
        '--allow-file-access-from-files'
      ]
    });
    page = await browser.newPage();
  });

  it('can be started', async () => {
    await page.goto('file://' + global.process.env.PWD + '/dist/index.html');
    await page.content();
    await page.waitForSelector('#myModalLabel');

    const version = await page.$eval('#designer-spaces-type', el => el.innerText);

    expect(version.trim()).equal('Systems');
  })

  after(async () => {
    await browser.close();
  });
});