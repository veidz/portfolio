describe('Experience Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#experience').scrollIntoView()
  })

  it('should render experience section', () => {
    cy.get('#experience').should('be.visible')
  })

  it('should display title', () => {
    cy.get('#experience h2').should('contain', 'Experiência Profissional')
  })

  it('should display subtitle', () => {
    cy.get('#experience')
      .contains('Minha jornada no desenvolvimento de software')
      .should('be.visible')
  })

  it('should display experience cards', () => {
    cy.get('#experience .bg-bg-card').should('have.length.at.least', 1)
  })

  it('should display company names', () => {
    cy.get('#experience').should('be.visible')
    cy.get('#experience .text-brand').should('have.length.at.least', 1)
  })

  it('should display roles', () => {
    cy.get('#experience h3').should('have.length.at.least', 1)
  })

  it('should display periods', () => {
    cy.get('#experience .text-text-muted').should('have.length.at.least', 1)
  })

  it('should display technologies', () => {
    cy.get('#experience')
      .find('.bg-bg-primary.text-text-secondary')
      .should('have.length.at.least', 1)
  })

  it('should have hover effect on cards', () => {
    cy.get('#experience .bg-bg-card')
      .first()
      .should('have.class', 'hover:border-brand')
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.get('#experience').should('be.visible')
    cy.get('#experience h2').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport(768, 1024)
    cy.get('#experience').should('be.visible')
    cy.get('#experience .bg-bg-card').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.get('#experience').should('be.visible')
  })

  it('should have correct background color', () => {
    cy.get('#experience').should('have.class', 'bg-bg-secondary')
  })

  it('should scroll to section when navigating', () => {
    cy.get('#experience').scrollIntoView()
    cy.get('#experience').should('be.visible')
  })
})
