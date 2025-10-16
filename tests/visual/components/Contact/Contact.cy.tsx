import { Contact } from '@/components/Contact/Contact'

const mockProps = {
  title: 'Entre em Contato',
  subtitle: 'Vamos trabalhar juntos',
  contactInfo: [
    {
      icon: 'email' as const,
      label: 'Email',
      value: 'contato@example.com',
      link: 'mailto:contato@example.com',
    },
    {
      icon: 'whatsapp' as const,
      label: 'Telefone',
      value: '+55 11 99999-9999',
    },
    {
      icon: 'location' as const,
      label: 'Localização',
      value: 'São Paulo, Brasil',
    },
  ],
  socialLinks: [
    {
      icon: 'github' as const,
      label: 'GitHub',
      url: 'https://github.com/veidz',
    },
    {
      icon: 'linkedin' as const,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/veidz',
    },
  ],
}

describe('Contact Component', () => {
  beforeEach(() => {
    cy.mount(<Contact {...mockProps} />)
  })

  it('should render the component', () => {
    cy.contains('Entre em Contato').should('be.visible')
    cy.contains('Vamos trabalhar juntos').should('be.visible')
  })

  it('should display all contact information', () => {
    cy.contains('Email').should('be.visible')
    cy.contains('contato@example.com').should('be.visible')
    cy.contains('Telefone').should('be.visible')
    cy.contains('+55 11 99999-9999').should('be.visible')
    cy.contains('Localização').should('be.visible')
    cy.contains('São Paulo, Brasil').should('be.visible')
  })

  it('should have clickable email link', () => {
    cy.contains('contato@example.com').should(
      'have.attr',
      'href',
      'mailto:contato@example.com',
    )
  })

  it('should display all social links', () => {
    cy.get('[aria-label="GitHub"]').should(
      'have.attr',
      'href',
      'https://github.com/veidz',
    )
    cy.get('[aria-label="LinkedIn"]').should(
      'have.attr',
      'href',
      'https://linkedin.com/in/veidz',
    )
    cy.get('[aria-label="Twitter"]').should(
      'have.attr',
      'href',
      'https://twitter.com/veidz',
    )
  })

  it('should have external link attributes on social links', () => {
    cy.get('[aria-label="GitHub"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
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

  it('should show sending state when form is submitted', () => {
    cy.get('input[name="name"]').type('João Silva')
    cy.get('input[name="email"]').type('joao@example.com')
    cy.get('textarea[name="message"]').type('Olá, gostaria de conversar!')

    cy.contains('button', 'Enviar Mensagem').click()

    cy.contains('Enviando...').should('be.visible')
  })

  it('should show success message after submission', () => {
    cy.get('input[name="name"]').type('João Silva')
    cy.get('input[name="email"]').type('joao@example.com')
    cy.get('textarea[name="message"]').type('Olá, gostaria de conversar!')

    cy.contains('button', 'Enviar Mensagem').click()

    cy.contains('✓ Enviado com sucesso!', { timeout: 3000 }).should(
      'be.visible',
    )
    cy.contains('Mensagem enviada com sucesso!').should('be.visible')
  })

  it('should clear form after successful submission', () => {
    cy.get('input[name="name"]').type('João Silva')
    cy.get('input[name="email"]').type('joao@example.com')
    cy.get('textarea[name="message"]').type('Olá, gostaria de conversar!')

    cy.contains('button', 'Enviar Mensagem').click()

    cy.contains('✓ Enviado com sucesso!', { timeout: 3000 }).should(
      'be.visible',
    )

    cy.get('input[name="name"]').should('have.value', '')
    cy.get('input[name="email"]').should('have.value', '')
    cy.get('textarea[name="message"]').should('have.value', '')
  })

  it('should have hover effects on social links', () => {
    cy.get('[aria-label="GitHub"]').realHover()
    cy.get('[aria-label="GitHub"]').should(
      'have.css',
      'transform',
      'matrix(1.1, 0, 0, 1.1, 0, 0)',
    )
  })

  it('should focus form fields with keyboard navigation', () => {
    cy.get('input[name="name"]').focus().should('have.focus')
    cy.realPress('Tab')
    cy.get('input[name="email"]').should('have.focus')
    cy.realPress('Tab')
    cy.get('textarea[name="message"]').should('have.focus')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-x')
    cy.contains('Entre em Contato').should('be.visible')
    cy.get('form').should('be.visible')
    cy.get('[aria-label="GitHub"]').should('be.visible')
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
