Feature: View card selection
	Scenario: User wants to see all the cards in their selection
		Given: I am viewing my card selection
		Then: It should show All 10 cards
		And: It should include a card named 'Jon Snow'
		And: It should include a small image of Jon Snow
