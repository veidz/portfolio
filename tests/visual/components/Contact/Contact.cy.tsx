describe('Contact Section', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.scrollTo('bottom')
  })

  it('should render the contact section', () => {
    cy.contains('Entre em Contato').should('be.visible')
  })

  it('should display contact form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[name="name"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('textarea[name="message"]').should('be.visible')
    cy.contains('button', 'Enviar Mensagem').should('be.visible')
  })

  it('should allow typing in form fields', () => {
    cy.get('input[name="name"]')
      .type('João Silva')
      .should('have.value', 'João Silva')
    cy.get('input[name="email"]')
      .type('joao@example.com')
      .should('have.value', 'joao@example.com')
    cy.get('textarea[name="message"]')
      .type('Olá, gostaria de conversar!')
      .should('have.value', 'Olá, gostaria de conversar!')
  })

  it('should validate email format', () => {
    cy.get('input[name="name"]').type('João Silva')
    cy.get('input[name="email"]').type('email-invalido')
    cy.get('textarea[name="message"]').type('Teste')

    cy.contains('button', 'Enviar Mensagem').should('be.disabled')
  })

  it('should enable submit button when form is valid', () => {
    cy.get('input[name="name"]').type('João Silva')
    cy.get('input[name="email"]').type('joao@example.com')
    cy.get('textarea[name="message"]').type('Olá, gostaria de conversar!')

    cy.contains('button', 'Enviar Mensagem').should('not.be.disabled')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-x')
    cy.contains('Entre em Contato').should('be.visible')
    cy.get('form').should('be.visible')
  })

  it('should be responsive on tablet', () => {
    cy.viewport('ipad-2')
    cy.contains('Entre em Contato').should('be.visible')
    cy.get('form').should('be.visible')
  })

  it('should be responsive on desktop', () => {
    cy.viewport(1920, 1080)
    cy.contains('Entre em Contato').should('be.visible')
    cy.get('form').should('be.visible')
  })
})
