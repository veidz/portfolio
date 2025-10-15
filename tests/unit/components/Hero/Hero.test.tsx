import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '@/components/Hero/Hero'

describe('Hero', () => {
  const defaultProps = {
    name: 'João Victor Veidz',
    title: 'Engenheiro de Software & Desenvolvedor Full Stack',
    description:
      '5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.',
  }

  it('should render name', () => {
    render(<Hero {...defaultProps} />)

    expect(screen.getByText('João Victor Veidz')).toBeInTheDocument()
  })

  it('should render title', () => {
    render(<Hero {...defaultProps} />)

    expect(
      screen.getByText('Engenheiro de Software & Desenvolvedor Full Stack'),
    ).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<Hero {...defaultProps} />)

    expect(
      screen.getByText(
        '5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.',
      ),
    ).toBeInTheDocument()
  })

  it('should have correct heading hierarchy', () => {
    render(<Hero {...defaultProps} />)

    const h1 = screen.getByRole('heading', { level: 1 })
    const h2 = screen.getByRole('heading', { level: 2 })

    expect(h1).toHaveTextContent('João Victor Veidz')
    expect(h2).toHaveTextContent(
      'Engenheiro de Software & Desenvolvedor Full Stack',
    )
  })

  it('should have section element', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('should have min-h-screen class', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-screen')
  })

  it('should have dark background', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-slate-950')
  })

  it('should have correct text colors', () => {
    render(<Hero {...defaultProps} />)

    const name = screen.getByText('João Victor Veidz')
    const title = screen.getByText(
      'Engenheiro de Software & Desenvolvedor Full Stack',
    )
    const description = screen.getByText(
      '5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.',
    )

    expect(name).toHaveClass('text-white')
    expect(title).toHaveClass('text-[#A91D3A]')
    expect(description).toHaveClass('text-gray-300')
  })

  it('should render with custom content', () => {
    const customProps = {
      name: 'Test Name',
      title: 'Test Title',
      description: 'Test Description',
    }

    render(<Hero {...customProps} />)

    expect(screen.getByText('Test Name')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should center content', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('flex')
    expect(section).toHaveClass('items-center')
    expect(section).toHaveClass('justify-center')
  })
})
