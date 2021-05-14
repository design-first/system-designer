/*
 * System Designer
 *
 * https://designfirst.io/systemdesigner/
 *
 * Copyright 2021 Erwan Carriou
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

/// <reference types="Cypress" />

describe('System designer', () => {
  it('should create a system, a schema and a model', () => {
    cy.visit('/')
      .get('#designer-dialog-welcome-modal-ok')
      .click()
      .get('.modal-backdrop')
      .should('not.exist')
      .get('#designer-toolbar-item-create')
      .click()
      .get('#designer-dialog-system-creation-modal')
      .should('exist')
      .get('#designer-dialog-system-creation-name')
      .type('StarWars')
      .get('#designer-dialog-system-creation-modal-ok')
      .click()
      .get('.panel-title')
      .contains('StarWars')
      // create a schema
      .get('#designer-menu-item-schemas')
      .click()
      .get('#designer-toolbar-item-create')
      .click()
      .get('#designer-dialog-schema-creation-name')
      .should('exist')
      .get('#designer-dialog-schema-creation-name')
      .type('Jedi')
      .get('#designer-dialog-schema-creation-modal-ok')
      .click()
      .get('.panel-title')
      .contains('Jedi')
      // create component
      .get('#designer-menu-item-components')
      .click()
      .get('#designer-toolbar-item-create')
      .click()
      .get('.panel-title')
      .should('exist')
  })
})
