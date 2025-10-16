import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Skills } from '@/components/Skills/Skills'
import { SkillsProps } from '@/components/Skills/Skills.types'

const defaultProps: SkillsProps = {
  title: 'Habilidades',
  subtitle: 'Tecnologias e ferramentas que domino',
  skills: [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Backend' },
    { name: 'Docker', level: 75, category: 'DevOps' },
  ],
}

describe('Skills', () => {
  it('should render title', () => {
    render(<Skills {...defaultProps} />)

    expect(screen.getByText('Habilidades')).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    render(<Skills {...defaultProps} />)

    expect(
      screen.getByText('Tecnologias e ferramentas que domino'),
    ).toBeInTheDocument()
  })

  it('should render all skill names', () => {
    render(<Skills {...defaultProps} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  it('should render skill levels', () => {
    render(<Skills {...defaultProps} />)

    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getAllByText('90%').length).toBeGreaterThan(0)
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })
})
