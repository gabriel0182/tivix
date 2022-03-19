import carRental from '../../support/pageObject/carRental'

Given('I am viewing the main page', () => {
	cy.openMainPage()
})

When('I type the required search info', () => {
	carRental.searchCarInfo()
})

And('I click on search button', () => {
	carRental.clickSearchButton()
})
And('I select the car from the list', () => {
	carRental.selectCarFromTheList()
})
Then('I can see the detailed car info', () => {
	carRental.validateCarInfo()
})
