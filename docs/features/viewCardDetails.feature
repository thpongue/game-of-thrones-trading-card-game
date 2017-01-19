Feature: View card details
	Scenario: User wants to see one of the cards in detail
		Given: I am viewing the details of 'Jon Snow'
		Then: It should show the name: 'Jon Snow'
		And: It should show age: '25'
		And: It should show status: 'alive'
		And: It should show a large image of Jon Snow
