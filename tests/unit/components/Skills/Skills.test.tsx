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

  it('should render all categories', () => {
    render(<Skills {...defaultProps} />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })

  it('should group skills by category', () => {
    const { container } = render(<Skills {...defaultProps} />)

    const categoryDivs = container.querySelectorAll('.space-y-12 > div')
    expect(categoryDivs).toHaveLength(3)
  })

  it('should have section element', () => {
    const { container } = render(<Skills {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'skills')
  })

  it('should have primary background', () => {
    const { container } = render(<Skills {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-bg-primary')
  })

  it('should have correct text colors', () => {
    const { container } = render(<Skills {...defaultProps} />)

    const title = container.querySelector('h2')
    expect(title).toHaveClass('text-text-primary')
  })

  it('should render with custom content', () => {
    const customProps: SkillsProps = {
      title: 'Minhas Skills',
      subtitle: 'O que eu sei fazer',
      skills: [{ name: 'Python', level: 70, category: 'Backend' }],
    }

    render(<Skills {...customProps} />)

    expect(screen.getByText('Minhas Skills')).toBeInTheDocument()
    expect(screen.getByText('O que eu sei fazer')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
  })
})
