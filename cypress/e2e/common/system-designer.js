/*
 * System Designer
 *
 * https://designfirst.io/systemdesigner/
 *
 * Copyright 2023 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Given,
  When,
  Then,
  Then as And,
} from '@badeball/cypress-cucumber-preprocessor'

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
  cy.get('#designer-dialog-schema-creation-name').type(schemaname)
})

And('Users click on schema create button', () => {
  cy.get('#designer-dialog-schema-creation-modal-ok').click()
})

Then('Users is able to see the schema {string}', (schemaname) => {
  cy.get('.panel-title').contains(schemaname).should('be.visible')
})

// Component

When('Users click on component tab', () => {
  cy.get('#designer-menu-item-components').click()
})

And('Users click to create a component', () => {
  cy.get('#designer-toolbar-item-create').click()
})

Then('Users is able to see the component', () => {
  cy.get('.panel-title').should('be.visible')
})
