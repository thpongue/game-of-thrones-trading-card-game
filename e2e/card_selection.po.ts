import { browser, $, $$ } from 'protractor';

export class CardSelection {
  navigateTo() {
    return browser.get('/');
  }

	selectCard(characterName: String) {
    $('#'+characterName).click();
	}

  getHeading() {
    return $('#Heading').getText();
  }
	
  getCharacterName() {
    return $('#CharacterName').getText();
  }

  getCardCount() {
		return this.getCardsArray().count();
  }
	
	hasCard(characterName: String) {
		return this.getCardsArray().filter(this.filterByText(characterName)).then(this.isFound())
	}

	hasImage(imageUrl: String) {
		return this.getCardsArray().filter(this.filterByImageUrl(imageUrl)).then(this.isFound());
	}
	
	private getCardsArray() {
		return $$('#Cards .Card');
	}
	
	private filterByText(matchText) {
		return (elements) => {
			return elements.getText().then(text => {
				return text === matchText;
			});
		}
	}

	private filterByImageUrl(matchText) {
		return (elements) => {
			return elements.$$('a[href*="+imageUrl+"]');
		}
	}
	
	private isFound() {
		return (elements) => {
			return elements.length > 0;
		}
	}
}
