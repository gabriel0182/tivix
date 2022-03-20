import { Before } from 'cypress-cucumber-preprocessor/steps'

Before({ tags: '@openMainPage' }, () => {
	cy.openMainPage()
})
