describe('System Designer', function () {
  it('can be started', async function (done) {
    try {
      const puppeteer = require('puppeteer');
      const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        args: [
          '--disable-setuid-sandbox',
          '--no-sandbox',
          '--allow-file-access-from-files'
        ]
      });
      const page = await browser.newPage();

      await page.goto('file://' + global.process.env.PWD + '/dist/index.html');
      await page.content();
      await page.waitForSelector('#myModalLabel');

      const version = await page.$eval('#designer-menubar-actions', el => el.innerText);

      await browser.close();
      expect(version.trim()).toBe('v2.1.0');
      done();
    } catch (err) {
      done.fail(err);
    }
  })
});