// import "regenerator-runtime";
// import puppeteer from 'puppeteer';

const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch(headless=false);
  const page = await browser.newPage();
  await page.goto('https://reddit.com');
 
  //process.env.REDDIT_USERNAME
  //process.env.REDDIT_PASSWORD
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
 
  console.log('Dimensions:', dimensions);
 
  await browser.close();
})();
