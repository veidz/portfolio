describe('Header Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render header with logo', () => {
    cy.get('header').should('be.visible')
    cy.contains('Veidz').should('be.visible')
  })

  it('should display all navigation links on desktop', () => {
    cy.viewport(1280, 720)
    cy.get('nav.hidden.md\\:flex a').should('have.length', 4)
    cy.get('nav.hidden.md\\:flex').within(() => {
      cy.contains('LinkedIn').should('be.visible')
      cy.contains('GitHub').should('be.visible')
      cy.contains('WhatsApp').should('be.visible')
      cy.contains('Email').should('be.visible')
    })
  })

  it('should show hamburger menu on mobile', () => {
    cy.viewport(375, 667)
    cy.reload()
    cy.get('[aria-label="Toggle menu"]').should('be.visible')
    cy.get('nav.hidden.md\\:flex').should('not.be.visible')
  })

  it('should toggle mobile menu when clicking hamburger button', () => {
    cy.viewport(375, 667)
    cy.reload()
    cy.get('[aria-label="Toggle menu"]').should(
      'have.attr',
      'aria-expanded',
      'false',
    )
    cy.get('[aria-label="Toggle menu"]').click()
    cy.get('[aria-label="Toggle menu"]').should(
      'have.attr',
      'aria-expanded',
      'true',
    )
    cy.get('div.md\\:hidden nav').within(() => {
      cy.contains('LinkedIn').should('be.visible')
      cy.contains('GitHub').should('be.visible')
    })
  })

  it('should close mobile menu when clicking a link', () => {
    cy.viewport(375, 667)
    cy.reload()
    cy.get('[aria-label="Toggle menu"]').click()
    cy.get('[aria-label="Toggle menu"]').should(
      'have.attr',
      'aria-expanded',
      'true',
    )
    cy.get('div.md\\:hidden nav').contains('LinkedIn').click()
    cy.get('[aria-label="Toggle menu"]').should(
      'have.attr',
      'aria-expanded',
      'false',
    )
  })

  it('should have correct styles and positioning', () => {
    cy.get('header').should('have.class', 'fixed')
    cy.get('header').should('have.class', 'z-50')
    cy.contains('Veidz').should('have.class', 'text-brand')
  })

  it('should render logo with Pacifico font', () => {
    cy.contains('Veidz').should('have.class', 'font-family-pacifico')
  })

  it('should render logo with correct text size', () => {
    cy.contains('Veidz').should('have.class', 'text-3xl')
    cy.contains('Veidz').should('have.class', 'font-bold')
  })

  it('should have hover effects on navigation links', () => {
    cy.viewport(1280, 720)
    cy.get('nav.hidden.md\\:flex').within(() => {
      cy.contains('LinkedIn')
        .should('have.class', 'text-secondary')
        .should('have.class', 'hover:text-brand')
    })
  })

  it('should be responsive at tablet size', () => {
    cy.viewport(768, 1024)
    cy.get('nav.hidden.md\\:flex').within(() => {
      cy.contains('LinkedIn').should('be.visible')
      cy.contains('GitHub').should('be.visible')
    })
  })

  it('should maintain header visibility when scrolling', () => {
    cy.viewport(1280, 720)
    cy.scrollTo(0, 500, { ensureScrollable: false })
    cy.get('header').should('be.visible')
  })
})
