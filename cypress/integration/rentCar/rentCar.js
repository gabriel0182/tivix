import carRental from '../../support/pageObject/carRental'

Given('I am viewing the main page', () => {
	carRental.verifyMainPage()
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
	//At the moment of rent the page is getting a 404 error,
	//so the test is validating the error is shown and printing in the
	//console "Test Failed"
	carRental.validateSuccessRental()
})
