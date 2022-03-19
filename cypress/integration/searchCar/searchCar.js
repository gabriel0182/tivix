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
Then('I see the list of available cars', () => {
	carRental.validateSearch()
})
