var format = require('date-format')
const date = new Date()
const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() + 3)
const year = date.getUTCFullYear()
const pickDate = format('yyyy-MM-dd', new Date())
const dropoff = format('yyyy-MM-dd', tomorrow)
class carRental {
	static verifyMainPage() {
		cy.get('title').should('contain', 'Car rent')
	}
	static searchCarInfo() {
		cy.fixture('../fixtures/search.json').then((info) => {
			cy.get('#search_form').within(() => {
				cy.get('#country')
					.select(info.country)
					.get('#city')
					.select(info.city)
					.get('#model')
					.type(year)
				cy.get('#pickup').clear().type(`${pickDate}`)
				cy.get('#dropoff').clear().type(`${dropoff}`)
			})
		})
	}
	static clickSearchButton() {
		cy.get('#search_form').within(() => {
			cy.get('button').contains('Search').click()
		})
	}
	static validateSearch() {
		cy.get('#search-results')
			.get('tbody tr')
			.find('td:nth-child(2)')
			.then(($val) => {
				const text = $val.text()
				cy.get('tbody tr').find('td:nth-child(2)').should('have.text', text)
			})
	}
	static selectCarFromTheList() {
		cy.get('#search-results')
			.get('tbody tr')
			.eq(1)
			.find('td:nth-child(2)')
			.then(($val) => {
				const text = $val.text()
				cy.contains(text).parent('tr').contains('Rent').click()
			})
	}
	static validateCarInfo() {
		cy.fixture('../fixtures/search.json').then((info) => {
			cy.get('.card-body').within(() => {
				cy.get('.card-text').eq(1).should('contain.text', `Location: ${info.country}, ${info.city}`)
				cy.get('h6').eq(0).should('contain.text', ` Pickup date: ${pickDate}`)
				cy.get('h6').eq(1).should('contain.text', ` Dropoff date: ${dropoff}`)
			})
		})
	}
	static clickOnRentButton() {
		cy.get('#content')
			.within(() => {
				cy.get('.btn-primary')
			})
			.then(($btn) => {
				if ($btn.text().includes('Rent!')) {
					cy.get('.btn-primary').contains('Rent!').click()
				} else if ($btn.text().includes('Rent')) {
					cy.get('.btn-primary').contains('Rent').click()
				}
			})
	}
	static typeRentalInfo() {
		cy.fixture('../fixtures/customer.json').then((info) => {
			cy.get('#content').within(() => {
				cy.get('#name').clear().type(info.name)
				cy.get('#last_name').clear().type(info.lastName)
				cy.get('#card_number').clear().type(info.cardNumber)
				cy.get('#email').clear().type(info.email)
			})
		})
	}
	static validateSuccessRental() {
		cy.get('body').then(($body) => {
			if ($body.text().includes('Page not found (404)')) {
				cy.log('Test Failed')
			} else if ($btn.text().includes('Car Rental Success')) {
				cy.log('Test Success')
			}
		})
	}
}

export default carRental
