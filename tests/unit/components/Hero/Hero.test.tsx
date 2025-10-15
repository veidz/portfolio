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
})
