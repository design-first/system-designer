import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Users have opened System Designer', () => {
  cy.visit('/').get('#designer-spaces-type').contains('Systems')
})

When('Users have closed the information Dialog', () => {
  cy.get('#designer-dialog-welcome-modal-ok')
    .click()
    .get('.modal-backdrop')
    .should('not.exist')
})

// System

When('Users click to create a system', () => {
  cy.get('#designer-toolbar-item-create').click()
})

And('Users enter system name as {string}', (systemname) => {
  cy.get('#designer-dialog-system-creation-modal')
    .should('exist')
    .get('#designer-dialog-system-creation-name')
    .type(systemname)
})

And('Users click on system create button', () => {
  cy.get('#designer-dialog-system-creation-modal-ok').click()
})

Then('Users is able to see the system {string}', (systemname) => {
  cy.get('.panel-title').should('be.visible').contains(systemname)
})

// Schema

When('Users click on schema tab', () => {
  cy.get('#designer-menu-item-schemas').click()
})

And('Users click to create a schema', () => {
  cy.get('#designer-toolbar-item-create').click()
})

And('Users enter schema name as {string}', (schemaname) => {
  cy.get('#designer-dialog-schema-creation-name')
    .should('exist')
    .get('#designer-dialog-schema-creation-name')
    .type(schemaname)
})

And('Users click on schema create button', () => {
  cy.get('#designer-dialog-schema-creation-modal-ok').click()
})

Then('Users is able to see the schema {string}', (schemaname) => {
  cy.get('.panel-title').should('be.visible').contains(schemaname)
})

// Component
When('Users click on component tab', () => {
  cy.get('#designer-menu-item-components').click()
})

And('Users click to create a component', () => {
  cy.get('#designer-toolbar-item-create').click()
})

Then('Users is able to see the component', () => {
  cy.get('.panel-title').should('exist')
})
