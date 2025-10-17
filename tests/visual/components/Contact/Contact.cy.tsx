describe('Contact Section', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#contact').scrollIntoView({ duration: 500 })
    cy.wait(2000)
  })

  it('should render the contact section', () => {
    cy.contains('Entre em Contato').should('be.visible')
  })

  it('should display contact information cards', () => {
    cy.contains('Informações de Contato').should('be.visible')
    cy.wait(1200)
    cy.contains('Email').should('be.visible')
    cy.contains('joaovictorveidz@gmail.com').should('be.visible')
    cy.contains('WhatsApp').should('be.visible')
    cy.get('#contact').contains('Localização').should('be.visible')
  })

  it('should display email as clickable mailto link', () => {
    cy.contains('a', 'joaovictorveidz@gmail.com')
      .should('have.attr', 'href')
      .and('include', 'mailto:')
  })

  it('should display WhatsApp link', () => {
    cy.contains('+55 11 96605-1750').parent().should('be.visible')
  })

  it('should display social media links', () => {
    cy.contains('Redes Sociais').should('be.visible')
    cy.get('a[aria-label="GitHub"]').should('be.visible')
    cy.get('a[aria-label="LinkedIn"]').should('be.visible')
  })

  it('should have correct attributes on social links', () => {
    cy.get('a[aria-label="GitHub"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
      .and('have.attr', 'href')
      .and('include', 'github.com')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-x')
    cy.wait(300)
    cy.contains('Entre em Contato').should('be.visible')
    cy.contains('Informações de Contato').should('be.visible')
    cy.get('a[aria-label="GitHub"]').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport('ipad-2')
    cy.wait(300)
    cy.contains('Entre em Contato').should('be.visible')
    cy.contains('Informações de Contato').should('be.visible')
    cy.get('a[aria-label="LinkedIn"]').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.wait(300)
    cy.contains('Entre em Contato').should('be.visible')
    cy.contains('Informações de Contato').should('be.visible')
    cy.contains('Redes Sociais').should('be.visible')
  })
})
