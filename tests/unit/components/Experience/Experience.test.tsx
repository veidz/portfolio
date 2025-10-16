import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Experience } from '@/components/Experience/Experience'
import { ExperienceProps } from '@/components/Experience/Experience.types'

const defaultProps: ExperienceProps = {
  title: 'Experiência Profissional',
  subtitle: 'Minha jornada no desenvolvimento de software',
  experiences: [
    {
      company: 'Tech Company',
      role: 'Senior Software Engineer',
      period: '2022 - Presente',
      description:
        'Desenvolvimento de aplicações web modernas usando React e Node.js',
      technologies: ['React', 'Node.js', 'TypeScript'],
      achievements: [
        'Liderou equipe de 5 desenvolvedores',
        'Implementou arquitetura de microserviços',
      ],
    },
    {
      company: 'Startup XYZ',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Desenvolvimento full stack com foco em performance',
      technologies: ['Next.js', 'PostgreSQL'],
      achievements: ['Melhorou performance em 40%'],
    },
  ],
}

describe('Experience', () => {
  it('should render title', () => {
    render(<Experience {...defaultProps} />)

    expect(screen.getByText('Experiência Profissional')).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    render(<Experience {...defaultProps} />)

    expect(
      screen.getByText('Minha jornada no desenvolvimento de software'),
    ).toBeInTheDocument()
  })

  it('should render all company names', () => {
    render(<Experience {...defaultProps} />)

    expect(screen.getByText('Tech Company')).toBeInTheDocument()
    expect(screen.getByText('Startup XYZ')).toBeInTheDocument()
  })
})
