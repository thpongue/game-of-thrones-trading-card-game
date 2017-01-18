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

  getCharacterAge() {
    return element(by.css('#CharacterAge')).getText();
  }
	
	getCharacterImageUrl() {
    return element(by.css('#CharacterImageName')).getText();
	}

	selectCardSelection() {
    element(by.css('#CardSelection')).click();
	}

	selectTearUpCard() {
    element(by.css('#TearUpCard')).click();
	}
}
