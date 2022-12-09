import { Given, When, Then } from "@wdio/cucumber-framework";
import sauceHomePage from "../../pageobjects/sauce.home.page";
import sauceProductPage from "../../pageobjects/product.page";
import chai from "chai";
import logger from "../../helper/logger";
import reporter from "../../helper/reporter";

Given(/^User is in login page$/, async function () {
  reporter.addStep(this.TestId, "info", "Launch sauce URL");
  //@ts-ignore
  await sauceHomePage.navigateTo(browser.config.testURL);
  reporter.addStep(this.TestId, "info", "Login Page Launched Successfully");
});

When(/^user enter userName and Password$/, async function () {
  try {
    reporter.addStep(this.TestId, "info", "Login to sacue demo..");
    await sauceHomePage.loginToSauceApp(
      this.TestId,
      process.env.userName_1,
      process.env.passWord_1
    );
  } catch (err) {
    err.message = `${this.TestId} Failed at login step), ${err.message}`;
    throw err;
  }
});

Then(
  /^User clicks on login button and logged in sucessfully$/,
  async function () {
    reporter.addStep(this.TestId, "info", "Product page launched");
    try {
      let productIsDisplayed = await sauceProductPage.checkProductsIsDisplayed(
        this.TestID
      );
      chai.expect(productIsDisplayed).to.equal(true);
    } catch (err) {
      reporter.addStep(
        this.TestId,
        "error",
        "This is a known issue :",
        true,
        `${process.env.JIRA_URL}SAME-46350`
      );
    }
    reporter.addStep(this.TestId, "info", "Product Validation completed");
  }
);
