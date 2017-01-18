import { browser, element, by } from 'protractor';

export class CardDetail {
  navigateTo() {
    return browser.get('/card-detail');
  }

  getHeading() {
    return element(by.css('#Heading')).getText();
  }

  getCharacterName() {
    return element(by.css('#CharacterName')).getText();
  }
}
