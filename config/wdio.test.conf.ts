import { TestCaseHookDefinition } from "@cucumber/cucumber";
import { config as baseConfig } from "../wdio.conf";
//It will merge the wdio.conf.js with the below env specific property
//Another way to merge is spread operator
export const config = Object.assign(baseConfig, {
  //All env specific key value pair
  environment: "Test",
  testURL: "https://www.saucedemo.com",
});
