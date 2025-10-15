describe('Header Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render header with logo', () => {
    cy.get('header').should('be.visible')
    cy.contains('Veidz').should('be.visible')
  })
})
