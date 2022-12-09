import chai from "chai";
import Page from "./page";
import reporter from "../helper/reporter";
class HomePage extends Page {
  constructor() {
    super();
  }
  /**Define all the page Object */

  get UserNameTextBox() {
    return $(`#user-name`);
  }

  get PassowrdTextBox() {
    return $(`#password`);
  }

  get loginButton() {
    return $(`#login-button`);
  }
  /**Actions */

  async setUserName(testId: string, userName: string) {
    if (!userName) throw Error(`Given UserName ${userName} is not valid`);
    try {
      userName = userName.trim();
      await this.typeInto(await this.UserNameTextBox, userName);
      reporter.addStep(testId, "info", `${userName} entered successfully`);
    } catch (err) {
      err.message = `Error Entering userName: ${userName},${err.message}`;
      throw err;
    }
  }

  async setPassowrd(testId: string, password: string) {
    if (!password) throw Error(`Given password ${password} is not valid`);
    try {
      password = password.trim();
      await this.typeInto(await this.PassowrdTextBox, password);
      reporter.addStep(testId, "info", `${password} entered successfully`);
    } catch (err) {
      err.message = `Error Entering password: ${password}, ${err.message}`;
      throw err;
    }
  }

  async clickLoginButton(testId: string) {
    try {
      await this.clickElement(await this.loginButton);
      reporter.addStep(testId, "info", `Login Button Clicked`);
    } catch (err) {
      err.message = `Error clicking on login button, ${err.message}`;
      throw err;
    }
  }

  async loginToSauceApp(testid: string, userName: string, passWord: string) {
    try {
      await this.setUserName(testid, userName);
      await this.setPassowrd(testid, passWord);
      await this.clickLoginButton(testid);
    } catch (err) {
      throw err;
    }
  }
}
export default new HomePage();
