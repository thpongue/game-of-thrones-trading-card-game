Feature: View card selection
	Scenario: User wants to see all the cards in their selection
		Given: I am viewing my card selection
		When: I have 10 cards in my selection
		Then: It should show the name: 'Jon Snow'
		And: It should show a small image of Jon Snow
