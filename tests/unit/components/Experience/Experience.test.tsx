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

  it('should render all roles', () => {
    render(<Experience {...defaultProps} />)

    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  })

  it('should render all periods', () => {
    render(<Experience {...defaultProps} />)

    expect(screen.getByText('2022 - Presente')).toBeInTheDocument()
    expect(screen.getByText('2020 - 2022')).toBeInTheDocument()
  })

  it('should render descriptions', () => {
    render(<Experience {...defaultProps} />)

    expect(
      screen.getByText(
        'Desenvolvimento de aplicações web modernas usando React e Node.js',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Desenvolvimento full stack com foco em performance'),
    ).toBeInTheDocument()
  })

  it('should render technologies', () => {
    render(<Experience {...defaultProps} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
  })

  it('should render achievements', () => {
    render(<Experience {...defaultProps} />)

    expect(
      screen.getByText('Liderou equipe de 5 desenvolvedores'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Implementou arquitetura de microserviços'),
    ).toBeInTheDocument()
    expect(screen.getByText('Melhorou performance em 40%')).toBeInTheDocument()
  })

  it('should have section element with id', () => {
    const { container } = render(<Experience {...defaultProps} />)

    const section = container.querySelector('section#experience')
    expect(section).toBeInTheDocument()
  })

  it('should have correct background color', () => {
    const { container } = render(<Experience {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-bg-secondary')
  })

  it('should render with custom content', () => {
    const customProps: ExperienceProps = {
      title: 'Minha Experiência',
      subtitle: 'Anos de trabalho',
      experiences: [
        {
          company: 'Company ABC',
          role: 'Developer',
          period: '2021',
          description: 'Descrição teste',
          technologies: ['Python'],
          achievements: ['Achievement 1'],
        },
      ],
    }

    render(<Experience {...customProps} />)

    expect(screen.getByText('Minha Experiência')).toBeInTheDocument()
    expect(screen.getByText('Anos de trabalho')).toBeInTheDocument()
    expect(screen.getByText('Company ABC')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })
})
