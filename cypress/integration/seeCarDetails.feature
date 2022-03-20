Feature: See car detailed car info

    @openMainPage

    Scenario: Search for a car to Rent and see the detailed info
        Given I am viewing the main page
        When I type the required search info
        And I click on search button
        And I select the car from the list
        Then I can see the detailed car info