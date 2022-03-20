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
And('I click on Rent button', () => {
	carRental.clickOnRentButton()
})
And('I fill out the customer required fields', () => {
	carRental.typeRentalInfo()
})
And('I click on Rent button', () => {
	carRental.clickOnRentButton()
})
Then('I should a success rental confirmation message', () => {
	carRental.validateSuccessRental()
})
