import { Home } from './home.po';
import { CardSelection } from './card_selection.po';
import { CardDetail } from './card_detail.po';

describe('Game Of Thrones Trading Card Game', () => {

	describe('When: I navigate to the root url', () => {
		let page: Home;

		beforeEach(() => {
			page = new Home();
			page.navigateTo();
		});

		it('Should redirect me to my card selection', () => {
			expect(page.getHeading()).toEqual('Card Selection');
		})
	});

	describe('Given: I am viewing my card selection', () => {
		let page: CardSelection;

		beforeEach(() => {
			page = new CardSelection();
			page.navigateTo();
		});

		it('Should show me my card selection', () => {
			expect(page.getHeading()).toEqual('Card Selection');
		})

		it('It Should show All 10 cards', () => {
			expect(page.getCardCount()).toEqual(10);
		})
		
		it('It Should include a card named "Jon Snow"', () => {
			page.hasCard('Jon Snow').then((val) => {
				expect(val).toBe(true);
			})
		});

		it('It Should include a small image of Jon Snow', () => {
			page.hasImage('assets/images/jon_snow100x100.jpg').then((val) => {
				expect(val).toBe(true);
			})
		});
		
		describe('When: I select the Jon Snow card', () => {
			let pageNavigatedTo: CardDetail;

			beforeEach((done) => {
				pageNavigatedTo = new CardDetail();
				page.selectCard('Jon-Snow').then(() => {
					done();
				})
			});

			it('Should navigate to the card details for "Jon Snow"', () => {
				pageNavigatedTo.getCharacterName().then(character => {
					expect(character).toEqual('Jon Snow');
				})
			})

			xit('Should show a large image of Jon Snow', () => {
				pageNavigatedTo.getCharacterImageUrl().then(character => {
					expect(character).toEqual('assets/images/jon_snow500x500.jpg');
				})
			})
			
			describe('When: I select the "card selection" option', () => {
				beforeEach(() => {
					pageNavigatedTo.selectCardSelection();
				});

				xit('Should navigate to my card selection', () => {
					expect(pageNavigatedTo.getCharacterName()).toEqual('Jon Snow');
				})
			});
			
			describe('When: I select the "tear up card" option', () => {
				beforeEach(() => {
					pageNavigatedTo.selectTearUpCard();
				});

				xit('Should delete the "Jon Snow" card from my collection', () => {
					expect(pageNavigatedTo.getCharacterName()).toBeNull();
				})
			});
		});
	});
});
