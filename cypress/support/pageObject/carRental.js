var format = require('date-format')
class carRental {
	static searchCarInfo() {
		const date = new Date()
		const tomorrow = new Date(date)
		tomorrow.setDate(tomorrow.getDate() + 3)
		const year = date.getUTCFullYear()
		const pickDate = format('yyyy-MM-dd', new Date())
		const dropoff = format('yyyy-MM-dd', tomorrow)
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
}

export default carRental
