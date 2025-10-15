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
})
