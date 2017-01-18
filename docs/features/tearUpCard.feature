Feature: Tear up card
	Scenario: User doesn't like a particular character and wants to tear up the card 
		Given: I am viewing the details of 'Jon Snow'
		When: I select the 'tear up card' option
		Then: It should delete the 'Jon Snow' card from my collection
