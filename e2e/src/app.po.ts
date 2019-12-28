import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getServernameText() {
    return element(by.xpath('//label[text()="Server Name"]')).getText();
  }
}
