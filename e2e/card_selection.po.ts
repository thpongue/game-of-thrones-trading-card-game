import { browser, $, $$, by } from 'protractor';

export class CardSelection {
  navigateTo() {
    return browser.get('/');
  }

	selectCard(characterName: String) {
    return $('#'+characterName).click();
	}

  getHeading() {
    return $('#Heading').getText().then(text => {
			return text;
		})
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

	// match any part of the string since we need to match relative urls
	private filterByImageUrl(matchText) {
		return (elements) => {
			return elements.all(by.tagName('img')).getAttribute('src').then(text => {
				return text.toString().match(new RegExp(matchText));
			})
		}
	}
	
	private isFound() {
		return (elements) => {
			return elements.length > 0;
		}
	}
}
