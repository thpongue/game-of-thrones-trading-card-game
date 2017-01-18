Feature: Navigate to card details
	Scenario: User selects a card from their card selection to see its details
		Given: I am viewing my card selection
		When: I select the 'Jon Snow' card
		Then: It should navigate to the card details for 'Jon Snow'
