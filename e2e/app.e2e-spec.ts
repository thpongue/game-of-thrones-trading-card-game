import { Home } from './home.po';
import { CardSelection } from './card_selection.po';
import { CardDetail } from './card_detail.po';

describe('Game Of Thrones Trading Card Game', () => {

	describe('When: I navigate to the root url', () => {
		beforeEach(() => {
			Home.NavigateTo();
		});

		it('Should redirect me to my card selection', () => {
			console.log(Home.HasHeading);
			expect(Home.HasHeading('Card Selection')).toBe(true);
		})
	});

	describe('Given: I am viewing my card selection', () => {

		beforeEach(() => {
			CardSelection.NavigateTo();
		});

		it('Should show me my card selection', () => {
			expect(CardSelection.HasHeading('Card Selection')).toBe(true);
		})

		it('It Should show all 10 cards', () => {
			expect(CardSelection.HasCardCount(10)).toBe(true);
		})
		
		it('It Should include a card named "Jon Snow"', () => {
			expect(CardSelection.HasCard('Jon Snow')).toBe(true);
		});

		it('It Should include a small image of Jon Snow', () => {
			expect(CardSelection.HasImage('assets/images/jon_snow100x100.jpg')).toBe(true);
		});
		
		describe('When: I select the Jon Snow card', () => {
			beforeEach((done) => {
				CardSelection.SelectCard('Jon-Snow').then(() => {
					done();
				})
			});

			it('Should show me the card details', () => {
				expect(CardDetail.HasHeading('Card Detail')).toBe(true);
			})

			it('Should navigate to the card details for "Jon Snow"', () => {
				expect(CardDetail.HasName('Jon Snow')).toBe(true);
			})

			it('Should show a large image of Jon Snow', () => {
				expect(CardDetail.HasImage('assets/images/jon_snow500x500.jpg')).toBe(true);
			})
			
			describe('When: I select the "card selection" option', () => {
				beforeEach(() => {
					CardDetail.SelectCardSelection();
				});

				xit('Should navigate to my card selection', () => {
					//expect(CardDetail.GetCharacterName()).toEqual('Jon Snow');
				})
			});
			
			describe('When: I select the "tear up card" option', () => {
				beforeEach(() => {
					CardDetail.SelectTearUpCard();
				});

				xit('Should delete the "Jon Snow" card from my collection', () => {
					//expect(CardDetail.GetCharacterName()).toBeNull();
				})
			});
		});
	});
});
