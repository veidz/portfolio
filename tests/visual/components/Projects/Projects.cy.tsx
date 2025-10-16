describe('Projects Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#projects').scrollIntoView()
  })

  it('should render projects section', () => {
    cy.get('#projects').should('be.visible')
  })

  it('should display title', () => {
    cy.get('#projects h2').should('contain', 'Projetos')
  })

  it('should display subtitle', () => {
    cy.get('#projects')
      .contains('Alguns dos meus trabalhos recentes')
      .should('be.visible')
  })

  it('should display project cards', () => {
    cy.get('#projects .bg-bg-card').should('have.length.at.least', 1)
  })

  it('should display project titles', () => {
    cy.get('#projects h3').should('have.length.at.least', 1)
  })

  it('should display project images', () => {
    cy.get('#projects .aspect-video').should('have.length.at.least', 1)
  })

  it('should display technologies', () => {
    cy.get('#projects')
      .find('.bg-bg-secondary.text-text-secondary')
      .should('have.length.at.least', 1)
  })

  it('should have hover effect on cards', () => {
    cy.get('#projects .bg-bg-card')
      .first()
      .should('have.class', 'hover:border-brand')
  })

  it('should display project links when available', () => {
    cy.get('#projects').find('a').should('have.length.at.least', 1)
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.get('#projects').should('be.visible')
    cy.get('#projects h2').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport(768, 1024)
    cy.get('#projects').should('be.visible')
    cy.get('#projects .bg-bg-card').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.get('#projects').should('be.visible')
    cy.get('#projects .grid').should('be.visible')
  })

  it('should have correct background color', () => {
    cy.get('#projects').should('have.class', 'bg-bg-primary')
  })

  it('should scroll to section when navigating', () => {
    cy.get('#projects').scrollIntoView()
    cy.get('#projects').should('be.visible')
  })
})
