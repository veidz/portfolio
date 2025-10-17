import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contact } from '@/components/Contact/Contact'
import { ContactProps } from '@/components/Contact/Contact.types'

const mockProps: ContactProps = {
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

describe('Contact', () => {
  it('should render title and subtitle', () => {
    render(<Contact {...mockProps} />)

    expect(screen.getByText('Entre em Contato')).toBeInTheDocument()
    expect(screen.getByText('Vamos trabalhar juntos')).toBeInTheDocument()
  })

  it('should render all contact info', () => {
    render(<Contact {...mockProps} />)

    expect(screen.getAllByText('Email')[0]).toBeInTheDocument()
    expect(screen.getByText('contato@example.com')).toBeInTheDocument()
    expect(screen.getByText('Telefone')).toBeInTheDocument()
    expect(screen.getByText('+55 11 99999-9999')).toBeInTheDocument()
    expect(screen.getByText('Localização')).toBeInTheDocument()
    expect(screen.getByText('São Paulo, Brasil')).toBeInTheDocument()
  })

  it('should render contact info with links', () => {
    render(<Contact {...mockProps} />)

    const emailLink = screen.getByRole('link', {
      name: 'contato@example.com',
    })
    expect(emailLink).toHaveAttribute('href', 'mailto:contato@example.com')
  })

  it('should render all social links', () => {
    render(<Contact {...mockProps} />)

    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/veidz')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/veidz',
    )
  })

  it('should have correct background color', () => {
    const { container } = render(<Contact {...mockProps} />)
    const section = container.querySelector('section')

    expect(section).toHaveClass('bg-bg-secondary')
  })

  it('should have correct section id for navigation', () => {
    const { container } = render(<Contact {...mockProps} />)
    const section = container.querySelector('section')

    expect(section).toHaveAttribute('id', 'contact')
  })

  it('should render contact cards with icons', () => {
    render(<Contact {...mockProps} />)

    const emailCard = screen.getByText('Email').closest('div')
    const phoneCard = screen.getByText('Telefone').closest('div')
    const locationCard = screen.getByText('Localização').closest('div')

    expect(emailCard).toBeInTheDocument()
    expect(phoneCard).toBeInTheDocument()
    expect(locationCard).toBeInTheDocument()
  })

  it('should render social media icons', () => {
    render(<Contact {...mockProps} />)

    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
