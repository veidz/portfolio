describe('Skills Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#skills').scrollIntoView()
  })

  it('should render skills section', () => {
    cy.get('#skills').should('be.visible')
  })

  it('should display title', () => {
    cy.get('#skills h2').should('contain', 'Habilidades')
  })

  it('should display subtitle', () => {
    cy.get('#skills')
      .contains('Tecnologias e ferramentas que domino')
      .should('be.visible')
  })

  it('should display all skill categories', () => {
    cy.get('#skills h3').should('have.length.at.least', 1)
    cy.get('#skills').contains('Frontend').should('be.visible')
  })

  it('should display skill cards with names and levels', () => {
    cy.get('#skills .bg-bg-card').should('have.length.at.least', 1)
    cy.get('#skills').contains('React').should('be.visible')
    cy.get('#skills').contains('%').should('be.visible')
  })

  it('should display progress bars', () => {
    cy.get('#skills .bg-brand.h-2.rounded-full').should(
      'have.length.at.least',
      1,
    )
  })

  it('should have correct title color', () => {
    cy.get('#skills h2').should('have.class', 'text-text-primary')
  })

  it('should have brand color on category titles', () => {
    cy.get('#skills h3').first().should('have.class', 'text-brand')
  })

  it('should have hover effect on skill cards', () => {
    cy.get('#skills .bg-bg-card')
      .first()
      .should('have.class', 'hover:border-brand')
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.get('#skills').should('be.visible')
    cy.get('#skills h2').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport(768, 1024)
    cy.get('#skills').should('be.visible')
    cy.get('#skills .bg-bg-card').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.get('#skills').should('be.visible')
    cy.get('#skills .grid').should('be.visible')
  })

  it('should have correct background color', () => {
    cy.get('#skills').should('have.class', 'bg-bg-primary')
  })

  it('should scroll to section when navigating', () => {
    cy.get('#skills').scrollIntoView()
    cy.get('#skills').should('be.visible')
  })
})
