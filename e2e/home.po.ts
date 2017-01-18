import { CardSelection } from './card_selection.po';
import { browser } from 'protractor';

export class Home extends CardSelection {
	// override
  navigateTo() {
    return browser.get('/');
  }
}
