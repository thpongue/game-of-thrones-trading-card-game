Feature: Navigate to card selection
	Scenario: User has finished viewing the 'Jon Snow' card and navigates back to their card selection
		Given: I am viewing the details of 'Jon Snow'
		When: I select the 'card selection' option
		Then: It should navigate to my card selection
