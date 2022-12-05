import { setWorldConstructor } from "@wdio/cucumber-framework";

class CustomWorld {
  appid: string;
  TestId: string;
  constructor() {
    this.appid = "";
    this.TestId = "";
  }
}
