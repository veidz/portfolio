import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/Header/Header'

describe('Header', () => {
  it('should render logo text', () => {
    render(<Header />)

    expect(screen.getByText('Veidz')).toBeInTheDocument()
  })

  it('should render logo with Pacifico font', () => {
    render(<Header />)

    const logo = screen.getByText('Veidz')
    expect(logo).toHaveClass('font-family-pacifico')
  })

  it('should render logo with correct size', () => {
    render(<Header />)

    const logo = screen.getByText('Veidz')
    expect(logo).toHaveClass('text-3xl')
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
      'https://wa.me/5511966051750?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.',
    )
    expect(whatsappLinks[0]).toHaveAttribute('target', '_blank')
  })

  it('should have fixed positioning', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header')
    expect(header).toHaveClass('fixed')
  })

  it('should render mobile menu button', () => {
    render(<Header />)

    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toBeInTheDocument()
  })

  it('should toggle mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    await waitFor(
      () => {
        expect(menuButton).toHaveAttribute('aria-expanded', 'true')
      },
      { timeout: 1000 },
    )

    await user.click(menuButton)
    await waitFor(
      () => {
        expect(menuButton).toHaveAttribute('aria-expanded', 'false')
      },
      { timeout: 1000 },
    )
  }, 10000)

  it('should close mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByLabelText('Toggle menu')
    await user.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    const mobileLinks = screen.getAllByText('LinkedIn')
    const mobileLink = mobileLinks.find((link) =>
      link.closest('nav')?.className.includes('flex-col'),
    )

    if (mobileLink) {
      await user.click(mobileLink)
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    }
  })
})
