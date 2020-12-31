// import "regenerator-runtime";
// import puppeteer from 'puppeteer';

const puppeteer = require('puppeteer');
(async () => {
  try{
    const browser = await puppeteer.launch({
      browser: 'chrome',
      headless: false   
    });
    const page = await browser.newPage();
    await page.goto('https://reddit.com');
   

    // try{
    //   /**
    //    * Waits for click on login page to resolve
    //    */
    //   const [response] = await Promise.all([
    //     page.click('a[href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F"]'),
    //     page.waitForNavigation({timeout: 10000}),


    //   ]);
    // }catch (error){
    //   console.log('hit timeout');
    // }

    page.click('a[href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F"]');

    const elementHandle = await page.$(
        'iframe[src="https://www.reddit.com/login/?experiment_d2x_sso_login_link=enabled"]',
    );
    console.log(process.env.REDDIT_USERNAME);
    

    const frame = await elementHandle.contentFrame();

    await frame.type('#loginUsername', process.env.REDDIT_USERNAME);
    // await page.type('#loginPassword', process.env.REDDIT_PASSWORD);

    // await page.$eval('form[action="/login"]', form => form.submit());
    // //process.env.REDDIT_USERNAME
    // //process.env.REDDIT_PASSWORD
    // // Get the "viewport" of the page, as reported by the page.
    // const dimensions = await page.evaluate(() => {
    //   return {
    //     width: document.documentElement.clientWidth,
    //     height: document.documentElement.clientHeight,
    //     deviceScaleFactor: window.devicePixelRatio
    //   };
    // });
   
    // console.log('Dimensions:', dimensions);
   
    // await browser.close();

  }catch(error){
    throw error;
  }

})();
