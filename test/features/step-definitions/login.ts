import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^User is in login page$/, async function () {
  await browser.url("https://www.saucedemo.com/");
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
    let loginButton = await $(`#login-button`);
    await loginButton.click();
    let value = await (await $(`//span[text()='Products']`)).isDisplayed();
    chai.expect(value).to.equal(true);
  }
);
