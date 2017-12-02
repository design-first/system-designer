const puppeteer = require('puppeteer');

async function test() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('file://' + global.process.env.PWD + '/dist/index.html');
  await page.content();
  await page.waitForSelector('#myModalLabel');

  const version = await page.$eval('#designer-menubar-actions', el => el.innerText);
  if ('v2.1.0', version) {
    console.log('System Designer is opening');
  }

  await browser.close();
}

test();