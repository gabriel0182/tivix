Feature: Search for a car to Rent

    Scenario: Search for a car to Rent and validate the results
        Given I am viewing the main page
        When I type the required search info
        And I click on search button
        Then I see the list of available cars