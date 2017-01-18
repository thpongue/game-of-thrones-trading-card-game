import { browser, element, by } from 'protractor';

export class CardSelection {
  navigateTo() {
    return browser.get('/card-selection');
  }

	selectCard(name: String) {
    element(by.css('#'+name)).click();
	}

  getHeading() {
    return element(by.css('#Heading')).getText();
  }
	
  getCharacterName() {
    return element(by.css('#CharacterName')).getText();
  }
}
