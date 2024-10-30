import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('I submit login', () => {
    cy.get('input[placeholder="Username"]').type('standard_user')
    cy.get('input[placeholder="Password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()
})

Then('I should see homepage', () => {
    cy.get('div.app_logo').should('be.visible')
})