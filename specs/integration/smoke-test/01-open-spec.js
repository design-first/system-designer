describe('System designer', () => {
  it('can be started', () => {
    cy.visit('http://localhost:8080')
    cy.get('#designer-spaces-type').contains('Systems')
  })
})