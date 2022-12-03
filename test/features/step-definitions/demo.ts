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
  let element = await $(`<h3>`);
  element.click();
});

Then(/^search URL should be (.*)$/, async function (expectedURL) {
  let currentURL = await browser.getUrl();
  chai.expect(currentURL).to.equal(expectedURL);
  console.log(JSON.stringify(browser));
});
