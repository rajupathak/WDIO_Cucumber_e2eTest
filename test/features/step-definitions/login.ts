import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import logger from "../../helper/logger";
Given(/^User is in login page$/, async function () {
  //@ts-ignore
  await browser.url(browser.config.testURL);
  this.appid = "1234";
});

When(/^user enter userName and Password$/, async function () {
  let userName = await $(`#user-name`);
  await userName.setValue(process.env.userName_1);

  let passWord = await $(`#password`);
  await passWord.setValue(process.env.passWord_1);
});

Then(
  /^User clicks on login button and logged in sucessfully$/,
  async function () {
    console.log(`>>appId is: ${this.appid}`);
    console.log(`>>testId is: ${this.TestId}`);
    let loginButton = await $(`#login-button`);
    await loginButton.click();
    logger.info(
      `User has clicked on the element ${JSON.stringify(loginButton.selector)}`
    );
    let value = await (await $(`//span[text()='Products']`)).isDisplayed();
    chai.expect(value).to.equal(false);
  }
);
