describe('About Visual Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render about section', () => {
    cy.get('section#about').should('be.visible')
  })

  it('should display title', () => {
    cy.contains('Sobre Mim').should('be.visible')
  })

  it('should display description', () => {
    cy.get('section#about')
      .find('p')
      .first()
      .should('be.visible')
      .and('not.be.empty')
  })

  it('should display years of experience', () => {
    cy.get('section#about').within(() => {
      cy.contains('5').should('be.visible')
      cy.contains('Experiência').should('be.visible')
    })
  })

  it('should display location', () => {
    cy.get('section#about').within(() => {
      cy.contains('São Paulo, Brasil').should('be.visible')
      cy.contains('Localização').should('be.visible')
    })
  })

  it('should display all highlights', () => {
    cy.get('section#about').within(() => {
      cy.contains('Destaques').should('be.visible')
      cy.get('ul li').should('have.length.at.least', 3)
    })
  })

  it('should be responsive on mobile', () => {
    cy.viewport(375, 667)
    cy.get('section#about').should('be.visible')
    cy.contains('Sobre Mim').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport(768, 1024)
    cy.get('section#about').should('be.visible')
    cy.contains('Sobre Mim').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.get('section#about').should('be.visible')
    cy.contains('Sobre Mim').should('be.visible')
  })

  it('should have correct background color', () => {
    cy.get('section#about').should('have.class', 'bg-slate-900')
  })

  it('should have brand color accents', () => {
    cy.get('section#about')
      .find('.bg-\\[\\#A91D3A\\]')
      .should('have.length.at.least', 2)
  })

  it('should scroll to section when navigating', () => {
    cy.scrollTo('bottom')
    cy.get('section#about').should('be.visible')
  })
})
