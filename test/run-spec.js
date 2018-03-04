/*
 * System Designer
 *
 * https://designfirst.io/systemdesigner/
 *
 * Copyright 2018 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const puppeteer = require('puppeteer');
const expect = require('chai').expect;

let browser = null;
let page = null;

describe('System Designer', function () {

  this.timeout(10000);

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