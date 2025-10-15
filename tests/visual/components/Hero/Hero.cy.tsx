describe('Hero Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render hero section', () => {
    cy.get('section').should('be.visible')
  })

  it('should display name prominently', () => {
    cy.contains('João Victor Veidz').should('be.visible')
  })

  it('should display title with brand color', () => {
    cy.contains('Engenheiro de Software')
      .should('be.visible')
      .should('have.class', 'text-brand')
  })

  it('should apply Pacifico font to last name', () => {
    cy.get('h1')
      .find('span')
      .eq(1)
      .should('contain', 'Veidz')
      .should('have.class', 'font-[family-name:var(--font-pacifico)]')
  })

  it('should apply brand color to Veidz', () => {
    cy.get('h1')
      .find('span')
      .eq(1)
      .should('contain', 'Veidz')
      .should('have.class', 'text-brand')
  })

  it('should display description', () => {
    cy.contains(
      '5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.',
    ).should('be.visible')
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.contains('João Victor Veidz').should('be.visible')
    cy.contains('Engenheiro de Software').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport(768, 1024)
    cy.contains('João Victor Veidz').should('be.visible')
    cy.contains('Engenheiro de Software').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.contains('João Victor Veidz').should('be.visible')
    cy.contains('Engenheiro de Software').should('be.visible')
  })

  it('should have proper spacing from header', () => {
    cy.get('section').should('have.class', 'pt-20')
  })

  it('should take full viewport height', () => {
    cy.get('section').should('have.class', 'min-h-screen')
  })

  it('should center content vertically and horizontally', () => {
    cy.get('section')
      .should('have.class', 'flex')
      .should('have.class', 'items-center')
      .should('have.class', 'justify-center')
  })
})
