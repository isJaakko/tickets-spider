import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 0,
      height: 0,
    },
  });
  const page = await browser.newPage();

  console.log("goto");
  await page.goto("https://flights.ctrip.com/fuzzysearch/search");

  await page.waitForSelector("span.city-name");

  await page.click(".user-select .fi-icon_close_line", {
    delay: 500,
  });

  await page.click(".flightOnlineFuzzySearch-LocationShape", {
    delay: 500,
  });

  const cities = await page.$eval(".CitySwitch-right-wrap__bot-item", {
    delay: 500,
  });

  console.log(cities.filter((x) => x.innerHTML.includes("北京")));

  // await browser.close();
})();
