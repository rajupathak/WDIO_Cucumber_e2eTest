import { Before, BeforeStep } from "@wdio/cucumber-framework";

//We can Customised BeforeStep hooks
BeforeStep(function () {
  //@ts-ignore
  this.TestId = browser.config.TestId;
});
