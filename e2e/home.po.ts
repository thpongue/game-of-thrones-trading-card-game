import { browser, element, by } from 'protractor';

export class Home extends CardSelection{
	// override
  navigateTo() {
    return browser.get('/');
  }
}
