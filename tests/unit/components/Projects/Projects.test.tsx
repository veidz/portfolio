import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from '@/components/Projects/Projects'
import { ProjectsProps } from '@/components/Projects/Projects.types'

const defaultProps: ProjectsProps = {
  title: 'Projetos',
  subtitle: 'Alguns dos meus trabalhos recentes',
  projects: [
    {
      title: 'E-commerce Platform',
      description:
        'Plataforma de e-commerce completa com carrinho e pagamentos',
      image: '🛒',
      technologies: ['React', 'Node.js', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      highlights: ['Processou R$ 1M em vendas', 'Mais de 10k usuários'],
    },
    {
      title: 'Task Manager',
      description: 'Gerenciador de tarefas com drag and drop',
      image: '📋',
      technologies: ['Next.js', 'TypeScript'],
      highlights: ['Interface intuitiva'],
    },
  ],
}

describe('Projects', () => {
  it('should render title', () => {
    render(<Projects {...defaultProps} />)

    expect(screen.getByText('Projetos')).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    render(<Projects {...defaultProps} />)

    expect(
      screen.getByText('Alguns dos meus trabalhos recentes'),
    ).toBeInTheDocument()
  })

  it('should render all project titles', () => {
    render(<Projects {...defaultProps} />)

    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Task Manager')).toBeInTheDocument()
  })

  it('should render all project descriptions', () => {
    render(<Projects {...defaultProps} />)

    expect(
      screen.getByText(
        'Plataforma de e-commerce completa com carrinho e pagamentos',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Gerenciador de tarefas com drag and drop'),
    ).toBeInTheDocument()
  })

  it('should render project images', () => {
    render(<Projects {...defaultProps} />)

    expect(screen.getByText('🛒')).toBeInTheDocument()
    expect(screen.getByText('📋')).toBeInTheDocument()
  })
})
