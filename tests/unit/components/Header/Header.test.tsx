import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/Header/Header'

describe('Header', () => {
  it('should render logo text', () => {
    render(<Header />)

    expect(screen.getByText('Veidz')).toBeInTheDocument()
  })

  it('should not render full name', () => {
    render(<Header />)

    expect(screen.queryByText('João Victor Veidz')).not.toBeInTheDocument()
  })

  it('should render all navigation links in desktop', () => {
    render(<Header />)

    const links = screen.getAllByText(/LinkedIn|GitHub|WhatsApp|Email/)
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('should have correct href for LinkedIn', () => {
    render(<Header />)

    const linkedinLinks = screen.getAllByText('LinkedIn')
    expect(linkedinLinks[0]).toHaveAttribute(
      'href',
      'https://linkedin.com/in/veidz',
    )
    expect(linkedinLinks[0]).toHaveAttribute('target', '_blank')
  })

  it('should have correct href for GitHub', () => {
    render(<Header />)

    const githubLinks = screen.getAllByText('GitHub')
    expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/veidz')
    expect(githubLinks[0]).toHaveAttribute('target', '_blank')
  })

  it('should have correct href for Email', () => {
    render(<Header />)

    const emailLinks = screen.getAllByText('Email')
    expect(emailLinks[0]).toHaveAttribute(
      'href',
      'mailto:joaovictorveidz@gmail.com',
    )
  })

  it('should have correct href for WhatsApp', () => {
    render(<Header />)

    const whatsappLinks = screen.getAllByText('WhatsApp')
    expect(whatsappLinks[0]).toHaveAttribute(
      'href',
      'https://wa.me/5511966051750',
    )
    expect(whatsappLinks[0]).toHaveAttribute('target', '_blank')
  })

  it('should have fixed positioning', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header')
    expect(header).toHaveClass('fixed')
  })
})
