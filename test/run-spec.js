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
    const packageVersion = require('../package.json').version;

    await page.goto('file://' + global.process.env.PWD + '/dist/index.html');
    await page.content();
    await page.waitForSelector('#myModalLabel');

    const version = await page.$eval('#designer-menubar-actions', el => el.innerText);

    expect(version.trim()).equal('v' + packageVersion);
  })

  after(async () => {
    await browser.close();
  });
});