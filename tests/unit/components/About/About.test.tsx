import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from '@/components/About/About'

describe('About', () => {
  const defaultProps = {
    title: 'Sobre Mim',
    description:
      'Desenvolvedor apaixonado por criar soluções web modernas e escaláveis.',
    yearsOfExperience: 5,
    location: 'São Paulo, Brasil',
    highlights: [
      'Conhecimento vasto em React e Next.js',
      'Experiência com microserviços',
      'Design Systems e componentização',
    ],
  }

  it('should render title', () => {
    render(<About {...defaultProps} />)

    expect(screen.getByText('Sobre Mim')).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<About {...defaultProps} />)

    expect(
      screen.getByText(
        'Desenvolvedor apaixonado por criar soluções web modernas e escaláveis.',
      ),
    ).toBeInTheDocument()
  })

  it('should render years of experience', () => {
    render(<About {...defaultProps} />)

    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('Experiência')).toBeInTheDocument()
  })

  it('should render location', () => {
    render(<About {...defaultProps} />)

    expect(screen.getByText('São Paulo, Brasil')).toBeInTheDocument()
    expect(screen.getByText('Localização')).toBeInTheDocument()
  })

  it('should render all highlights', () => {
    render(<About {...defaultProps} />)

    expect(
      screen.getByText('Conhecimento vasto em React e Next.js'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Experiência com microserviços'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Design Systems e componentização'),
    ).toBeInTheDocument()
  })

  it('should have section element with id', () => {
    const { container } = render(<About {...defaultProps} />)

    const section = container.querySelector('section#about')
    expect(section).toBeInTheDocument()
  })

  it('should have correct background color', () => {
    const { container } = render(<About {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-bg-secondary')
  })

  it('should have heading hierarchy', () => {
    render(<About {...defaultProps} />)

    const h2 = screen.getByRole('heading', { level: 2, name: 'Sobre Mim' })
    const h3 = screen.getByRole('heading', { level: 3, name: 'Destaques' })

    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
  })

  it('should render with custom content', () => {
    const customProps = {
      title: 'About Me',
      description: 'Custom description',
      yearsOfExperience: 10,
      location: 'Rio de Janeiro, Brasil',
      highlights: ['Highlight 1', 'Highlight 2'],
    }

    render(<About {...customProps} />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Custom description')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Rio de Janeiro, Brasil')).toBeInTheDocument()
    expect(screen.getByText('Highlight 1')).toBeInTheDocument()
    expect(screen.getByText('Highlight 2')).toBeInTheDocument()
  })

  it('should have brand color accents', () => {
    render(<About {...defaultProps} />)

    const experienceBox = screen.getByText('5').closest('div')
    expect(experienceBox).toHaveClass('bg-brand')
  })

  it('should render highlights list with correct number of items', () => {
    render(<About {...defaultProps} />)

    const highlights = screen.getAllByText(/▸/)
    expect(highlights).toHaveLength(3)
  })

  it('should have responsive padding', () => {
    const { container } = render(<About {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('py-20')
  })
})
