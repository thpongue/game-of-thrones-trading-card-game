import { $ } from 'protractor';

export class CardDetail {
  getHeading() {
    return $('#Heading').getText().then(text => {
			return text;
		})
  }

  getCharacterName() {
    return $('#Name').getText().then(text => {
			return text;
		})
  }

  getCharacterAge() {
    return $('#CharacterAge').getText().then(text => {
			return text;
		})
  }
	
	getCharacterImageUrl() {
    return $('#CharacterImageUrl').getText().then(text => {
			return text;
		})
	}

	selectCardSelection() {
    return $('#CardSelection').click();
	}

	selectTearUpCard() {
    return $('#TearUpCard').click();
	}
}
