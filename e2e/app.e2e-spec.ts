import { Home, CardSelection, CardDetail } from './app.po';

describe('Game Of Thrones Trading Card Game', function() {

	// Feature: Site root url redirects straight to users card selection
	// Scenario: User navigates to the site
	describe('When: I navigate to the root url', function() {
		let page: Home;

		beforeEach(() => {
			page.navigateTo();
		});

		it('should redirect me to my card selection', function() {
			expect(page.getHeading()).toEqual('Card Selection');
		})
	});

	// Feature; Navigate to card details
	// Scenario: User selects a card from their card selection to see its details
	describe('Given: I am viewing my card selection', function() {
		let page: CardSelection;

		beforeEach(() => {
			page.navigateTo();
		});

		describe('When: I select the Jon Snow card', function() {
			beforeEach(() => {
				page.selectCard('Jon_Snow');
			});

			it('should navigate to the card details for 'Jon Snow'', function() {
				let pageNavigatedTo: CardDetail;
				expect(pageNavigatedTo.getCharacterName()).toEqual('Jon Snow');
			})
		});
	});

	// navigateToCardSelection.feature


	// tearUpCard.feature


	// viewCardDetails.feature


	// viewCardSelection.feature




	// here


	describe('When I navigate to the card selection page url', function() {
		let page: CardSelection;
		
		beforeEach(() => {
			page.navigateTo('card-selection');
		});

		it('should show the card selection page', () => {
			expect(page.getHeading()).toEqual(cardSelectionPageHeading);
		});
		
		// implicitly test that 10 cards are displayed
		it('should navigate to the card details view when the first card is clicked', function() {
			let page: CardDetail;
			page.clickCardByTitle('Jon Snow').then(function() {
				expect(page.getHeading()).toEqual(cardSelectionPageHeading);
			})
		});
	});

});
