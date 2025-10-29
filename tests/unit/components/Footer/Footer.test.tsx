import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '@/components/Footer/Footer'

describe('Footer', () => {
  it('should render footer with name and year', () => {
    render(<Footer name='João Victor Veidz' year={2025} />)

    expect(screen.getByText(/2025/)).toBeInTheDocument()
    expect(screen.getByText(/João Victor Veidz/)).toBeInTheDocument()
    expect(screen.getByText(/Todos os direitos reservados/)).toBeInTheDocument()
  })

  it('should use current year if not provided', () => {
    const currentYear = new Date().getFullYear()
    render(<Footer name='João Victor Veidz' />)

    expect(
      screen.getByText(new RegExp(currentYear.toString())),
    ).toBeInTheDocument()
  })

  it('should render social media links', () => {
    render(<Footer name='João Victor Veidz' />)

    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    const emailLink = screen.getByLabelText('Email')

    expect(githubLink).toHaveAttribute('href', 'https://github.com/veidz')
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/veidz',
    )
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:joaovictorveidz@gmail.com',
    )
  })

  it('should have external link attributes on social links', () => {
    render(<Footer name='João Victor Veidz' />)

    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render with correct styling classes', () => {
    const { container } = render(<Footer name='João Victor Veidz' />)
    const footer = container.querySelector('footer')

    expect(footer).toHaveClass(
      'bg-bg-primary',
      'border-t',
      'border-border-primary',
    )
  })
})
