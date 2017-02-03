import { browser, $, $$, by } from 'protractor';
import { Utils } from './Utils.po';

export class CardSelection {

	// public

  static NavigateTo() {
    return browser.get('/');
  }

	static HasHeading(headingName) {
    return $('#Heading').getText().then(text => {
			return text === headingName;
		})
	}

  static HasCardCount(expected) {
		return this.GetCards().count().then(count => {
			return count === expected;
		})
  }
	
	static HasCard(characterName: String) {
		return this.GetCards().filter(Utils.FilterByText(characterName)).then(Utils.IsFound())
	}

	static HasImage(imageUrl: String) {
		return this.GetCards().filter(Utils.FilterByImageUrl(imageUrl)).then(Utils.IsFound());
	}

	static SelectCard(characterName: String) {
    return $('#'+characterName).click();
	}


	// private
	
	private static GetCards() {
		return $$('#Cards .Card');
	}
	
}
