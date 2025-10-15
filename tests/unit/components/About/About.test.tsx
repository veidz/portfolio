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
      'Especialista em React e Next.js',
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
      screen.getByText('Especialista em React e Next.js'),
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
    expect(section).toHaveClass('bg-slate-900')
  })

  it('should have heading hierarchy', () => {
    render(<About {...defaultProps} />)

    const h2 = screen.getByRole('heading', { level: 2, name: 'Sobre Mim' })
    const h3 = screen.getByRole('heading', { level: 3, name: 'Destaques' })

    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
  })
})
