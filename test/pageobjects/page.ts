import chai from "chai";
import { error } from "winston";

export default class Page {
  constructor() {}

  //Launch URL

  async navigateTo(path: string) {
    await browser.url(path);
    //await browser.maximizeWindow();
  }

  //Click Element

  async clickElement(ele: WebdriverIO.Element) {
    await ele.waitForClickable({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.click();
  }

  //Set Value

  async typeInto(ele: WebdriverIO.Element, inputValue: string) {
    await ele.waitForDisplayed({ timeout: 5000 });
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.setValue(inputValue);
  }
}
