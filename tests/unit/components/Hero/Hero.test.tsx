import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '@/components/Hero/Hero'

describe('Hero', () => {
  const defaultProps = {
    name: 'João Victor Veidz',
    title: 'Engenheiro de Software',
    description:
      '5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.',
  }

  it('should render name', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const h1 = container.querySelector('h1')
    expect(h1).toHaveTextContent('João Victor Veidz')
  })

  it('should render title', () => {
    render(<Hero {...defaultProps} />)

    expect(screen.getByText('Engenheiro de Software')).toBeInTheDocument()
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
    expect(h2).toHaveTextContent('Engenheiro de Software')
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
    expect(section).toHaveClass('bg-primary')
  })

  it('should have correct text colors', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const h1 = container.querySelector('h1')
    const title = screen.getByText('Engenheiro de Software')
    const description = screen.getByText(
      '5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.',
    )

    expect(h1).toHaveClass('text-primary')
    expect(title).toHaveClass('text-brand')
    expect(description).toHaveClass('text-secondary')
  })

  it('should render with custom content', () => {
    const customProps = {
      name: 'Test Name',
      title: 'Test Title',
      description: 'Test Description',
    }

    const { container } = render(<Hero {...customProps} />)

    const h1 = container.querySelector('h1')
    expect(h1).toHaveTextContent('Test Name')
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

  it('should apply Pacifico font to last name', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const lastName = container.querySelector('.font-family-pacifico')
    expect(lastName).toBeInTheDocument()
    expect(lastName).toHaveTextContent('Veidz')
  })

  it('should apply brand color to Veidz', () => {
    const { container } = render(<Hero {...defaultProps} />)

    const lastName = container.querySelector('.text-brand')
    expect(lastName).toBeInTheDocument()
    expect(lastName).toHaveTextContent('Veidz')
  })
})
