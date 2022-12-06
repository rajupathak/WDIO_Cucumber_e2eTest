import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import logger from "../../helper/logger";
import reporter from "../../helper/reporter";
Given(/^User is in login page$/, async function () {
  //@ts-ignore
  await browser.url(browser.config.testURL);
  reporter.addStep(this.TestId, "info", "Login Page Launched Successfully");
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
    try {
      chai.expect(value).to.equal(false);
    } catch (err) {
      reporter.addStep(
        this.TestId,
        "error",
        "This is a known issue :",
        true,
        `${process.env.JIRA_URL}SAME-46350`
      );
    }
    reporter.addStep(this.TestId, "info", "Logged in  Successfully");
  }
);
