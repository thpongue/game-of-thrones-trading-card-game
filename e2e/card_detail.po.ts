import { $, $$, element } from 'protractor';
import { Utils } from './Utils.po';

export class CardDetail {
	
	// public

	static HasHeading(headingName) {
    return $('#Heading').getText().then(text => {
			return text === headingName;
		})
	}

	static HasName(characterName: String) {
		return this.GetCard().filter(Utils.FilterByText(characterName)).then(Utils.IsFound())
	}

	static HasImage(imageUrl: String) {
		return this.GetCard().filter(Utils.FilterByImageUrl(imageUrl)).then(Utils.IsFound());
	}
	
	static SelectCardSelection() {
    return $('#CardSelection').click();
	}

	static SelectTearUpCard() {
    return $('#TearUpCard').click();
	}


	// private

	private static GetCard() {
		return $$('#Card');
	}
}
