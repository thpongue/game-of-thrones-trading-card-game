import { Home } from './home.po';
import { CardSelection } from './card_selection.po';
import { CardDetail } from './card_detail.po';

describe('Game Of Thrones Trading Card Game', function() {

	// Feature: Site root url redirects straight to users card selection
	// Scenario: User navigates to the site
	describe('When: I navigate to the root url', function() {
		let page: Home;

		beforeEach(() => {
			page = new Home();
			page.navigateTo();
		});

		it('Should redirect me to my card selection', function() {
			expect(page.getHeading()).toEqual('Card Selection');
		})
	});

	describe('Given: I am viewing my card selection', function() {
		let page: CardSelection;

		beforeEach(() => {
			page = new CardSelection();
			page.navigateTo();
		});
		
		describe('When: I select the Jon Snow card', function() {
			let pageNavigatedTo: CardDetail;

			beforeEach(() => {
				pageNavigatedTo = new CardDetail();
				page.selectCard('Jon_Snow');
			});

			it('Should navigate to the card details for "Jon Snow"', function() {
				expect(pageNavigatedTo.getCharacterName()).toEqual('Jon Snow');
			})
			
			// Feature: Navigate to card selection
			// Scenario: User has finished viewing the 'Jon Snow' card and navigates back to their card selection
			// Given: I am viewing the details of 'Jon Snow'
			describe('When: I select the "card selection" option', function() {
				beforeEach(() => {
					pageNavigatedTo.selectCardSelection();
				});

				it('Should navigate to my card selection', function() {
					expect(pageNavigatedTo.getCharacterName()).toEqual('Jon Snow');
				})
			});
			
			// Feature: Tear up card
			// Scenario: User doesn't like a particular character and wants to tear up the card 
			// Given: I am viewing the details of 'Jon Snow'
			describe('When: I select the "tear up card" option', function() {
				beforeEach(() => {
					pageNavigatedTo.selectTearUpCard();
				});

				it('Should delete the "Jon Snow" card from my collection', function() {
					expect(pageNavigatedTo.getCharacterName()).toBeNull();
				})
			});

			// Feature: View card details
			// Scenario: User wants to see one of the cards in detail
			// Given: I am viewing the details of 'Jon Snow'
			it('Should show the name: "Jon Snow"', function() {
				expect(pageNavigatedTo.getCharacterName()).toEqual('Jon Snow');
			})

			it('Should show age: "25"', function() {
				expect(pageNavigatedTo.getCharacterAge()).toEqual('Jon Snow');
			})

			it('Should show a large image of Jon Snow', function() {
				expect(pageNavigatedTo.getCharacterImageUrl()).toEqual('JonSnow.jpg');
			})
		});
		
		// Feature: View card selection
		// Scenario: User wants to see all the cards in their selection
		// Given: I am viewing my card selection
		it('It Should show All 10 cards', function() {
			expect(page.getCardCount()).toEqual(10);
		})
		
		it('It Should include a card named: "Jon Snow" with a small image of Jon Snow', function() {
			var characterName = page.getCharacterNameForCard('Jon Snow');
			var imageUrl = page.getImageUrlForCard('Jon Snow');
			expect(characterName).toEqual('Jon Snow');
			expect(imageUrl).toEqual('JonSnow.jpg');
		});
	});
});
