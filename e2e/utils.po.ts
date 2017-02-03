import { by } from 'protractor';

export class Utils {
	static FilterByText(matchText) {
		return (elements) => {
			return elements.getText().then(text => {
				return text === matchText;
			});
		}
	}

	static FilterByImageUrl(matchText) { // match any part of the string since we need to match relative urls
		return (elements) => {
			return elements.all(by.tagName('img')).getAttribute('src').then(text => {
				return text.toString().match(new RegExp(matchText));
			})
		}
	}
	
	static IsFound() {
		return (elements) => {
			return elements.length > 0;
		}
	}
}
