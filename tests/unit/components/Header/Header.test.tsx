import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/Header/Header'

describe('Header', () => {
  it('should render logo text', () => {
    render(<Header />)

    expect(screen.getByText('Veidz')).toBeInTheDocument()
  })

  it('should not render full name', () => {
    render(<Header />)

    expect(screen.queryByText('João Victor Veidz')).not.toBeInTheDocument()
  })
})
