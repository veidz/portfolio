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
})
