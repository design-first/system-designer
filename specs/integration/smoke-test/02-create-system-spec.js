describe('System designer', () => {
  it('can create a system', () => {
    cy.visit('http://localhost:8080')

    cy.get('#designer-dialog-welcome-modal-ok').click()
    cy.get('.modal-backdrop').should('not.exist')

    cy.get('#designer-toolbar-item-create').click()
    cy.get('#designer-dialog-system-creation-modal').should('exist')

    cy.get('#designer-dialog-system-creation-name').type('StarWars')
    cy.get('#designer-dialog-system-creation-modal-ok').click()

    cy.get('.panel-title').contains('StarWars')

    // create a schema
    cy.get('#designer-menu-item-schemas').click()

    cy.get('#designer-toolbar-item-create').click()
    cy.get('#designer-dialog-schema-creation-name').should('exist')

    cy.get('#designer-dialog-schema-creation-name').type('Jedi')
    cy.get('#designer-dialog-schema-creation-modal-ok').click()

    cy.get('.panel-title').contains('Jedi')

    // create component
    cy.get('#designer-menu-item-components').click()

    cy.get('#designer-toolbar-item-create').click()
    cy.get('.panel-title').should('exist')
  })
})