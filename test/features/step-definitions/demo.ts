import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com/");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`search Item ::${searchItem}`);
  let element = await $(`//input[@name='q']`);
  element.click();
  await element.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^click on the first SeachItem$/, async function () {
  let element = await $(
    `//a//h3[contains(text(),'WebdriverIO · Next-gen browser and mobile automation test ')]`
  );
  await browser.waitUntil(async function () {
    return await element.isDisplayed();
  });
  await element.click();
  await browser.waitUntil(async function () {
    return await $(`//a[text()='Community']`).isDisplayed();
  });
});

Then(/^search URL should be (.*)$/, async function (expectedURL) {
  let currentURL = await browser.getUrl();
  console.log(`>>currentUrl is ${currentURL}`);
  chai.expect(currentURL).to.equal(expectedURL);
  //console.log(JSON.stringify(browser));
});
