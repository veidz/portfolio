import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from '@/components/Header/Header'

describe('Header', () => {
  it('should render logo text', () => {
    render(<Header />)

    expect(screen.getByText('Veidz')).toBeInTheDocument()
  })
})
