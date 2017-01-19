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

	// TODO
  getCardCount() {
		return 0;
  }
	
	getCharacterNameForCard(characterName: String) {
    return element(by.css('#'+characterName + '#characterName')).getText();
	}

	getImageUrlForCard(characterName: String) {
    return element(by.css('#'+characterName + '#imageUrl')).getText();
	}
}
