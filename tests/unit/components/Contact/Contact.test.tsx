import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Contact } from '@/components/Contact/Contact'
import { ContactProps } from '@/components/Contact/Contact.types'
import { vi } from 'vitest'

const mockProps: ContactProps = {
  title: 'Entre em Contato',
  subtitle: 'Vamos trabalhar juntos',
  contactInfo: [
    {
      icon: 'email' as const,
      label: 'Email',
      value: 'contato@example.com',
      link: 'mailto:contato@example.com',
    },
    {
      icon: 'whatsapp' as const,
      label: 'Telefone',
      value: '+55 11 99999-9999',
    },
    {
      icon: 'location' as const,
      label: 'Localização',
      value: 'São Paulo, Brasil',
    },
  ],
  socialLinks: [
    {
      icon: 'github' as const,
      label: 'GitHub',
      url: 'https://github.com/veidz',
    },
    {
      icon: 'linkedin' as const,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/veidz',
    },
  ],
}

describe('Contact', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should render title and subtitle', () => {
    render(<Contact {...mockProps} />)

    expect(screen.getByText('Entre em Contato')).toBeInTheDocument()
    expect(screen.getByText('Vamos trabalhar juntos')).toBeInTheDocument()
  })

  it('should render all contact info', () => {
    render(<Contact {...mockProps} />)

    expect(screen.getAllByText('Email')[0]).toBeInTheDocument()
    expect(screen.getByText('contato@example.com')).toBeInTheDocument()
    expect(screen.getByText('Telefone')).toBeInTheDocument()
    expect(screen.getByText('+55 11 99999-9999')).toBeInTheDocument()
    expect(screen.getByText('Localização')).toBeInTheDocument()
    expect(screen.getByText('São Paulo, Brasil')).toBeInTheDocument()
  })

  it('should render contact info with links', () => {
    render(<Contact {...mockProps} />)

    const emailLink = screen.getByRole('link', {
      name: 'contato@example.com',
    })
    expect(emailLink).toHaveAttribute('href', 'mailto:contato@example.com')
  })

  it('should render all social links', () => {
    render(<Contact {...mockProps} />)

    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/veidz')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/veidz',
    )
  })

  it('should render contact form with all fields', () => {
    render(<Contact {...mockProps} />)

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensagem')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Enviar Mensagem' }),
    ).toBeInTheDocument()
  })

  it('should update form fields when typing', () => {
    render(<Contact {...mockProps} />)

    const nameInput = screen.getByLabelText('Nome') as HTMLInputElement
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement
    const messageInput = screen.getByLabelText(
      'Mensagem',
    ) as HTMLTextAreaElement

    fireEvent.change(nameInput, { target: { value: 'João Silva' } })
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })
    fireEvent.change(messageInput, {
      target: { value: 'Olá, gostaria de conversar!' },
    })

    expect(nameInput.value).toBe('João Silva')
    expect(emailInput.value).toBe('joao@example.com')
    expect(messageInput.value).toBe('Olá, gostaria de conversar!')
  })

  it('should show sending state when form is submitted', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Email enviado com sucesso' }),
    } as Response)

    render(<Contact {...mockProps} />)

    const nameInput = screen.getByLabelText('Nome')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Mensagem')
    const submitButton = screen.getByRole('button', { name: 'Enviar Mensagem' })

    fireEvent.change(nameInput, { target: { value: 'João Silva' } })
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })
    fireEvent.change(messageInput, {
      target: { value: 'Olá, gostaria de conversar!' },
    })

    fireEvent.click(submitButton)

    expect(screen.getByText('Enviando...')).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  it('should show success message after form submission', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Email enviado com sucesso' }),
    } as Response)

    render(<Contact {...mockProps} />)

    const nameInput = screen.getByLabelText('Nome')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Mensagem')
    const submitButton = screen.getByRole('button', { name: 'Enviar Mensagem' })

    fireEvent.change(nameInput, { target: { value: 'João Silva' } })
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })
    fireEvent.change(messageInput, {
      target: { value: 'Olá, gostaria de conversar!' },
    })

    fireEvent.click(submitButton)

    await waitFor(
      () => {
        expect(
          screen.getByRole('button', { name: /enviado com sucesso/i }),
        ).toBeInTheDocument()
      },
      { timeout: 2000 },
    )

    expect(
      screen.getByText(
        'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      ),
    ).toBeInTheDocument()
  })

  it('should clear form fields after successful submission', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Email enviado com sucesso' }),
    } as Response)

    render(<Contact {...mockProps} />)

    const nameInput = screen.getByLabelText('Nome') as HTMLInputElement
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement
    const messageInput = screen.getByLabelText(
      'Mensagem',
    ) as HTMLTextAreaElement

    fireEvent.change(nameInput, { target: { value: 'João Silva' } })
    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })
    fireEvent.change(messageInput, {
      target: { value: 'Olá, gostaria de conversar!' },
    })

    const submitButton = screen.getByRole('button', { name: 'Enviar Mensagem' })
    fireEvent.click(submitButton)

    await waitFor(
      () => {
        expect(nameInput.value).toBe('')
      },
      { timeout: 2000 },
    )

    expect(emailInput.value).toBe('')
    expect(messageInput.value).toBe('')
  })

  it('should have correct background color', () => {
    const { container } = render(<Contact {...mockProps} />)
    const section = container.querySelector('section')

    expect(section).toHaveClass('bg-bg-secondary')
  })

  it('should have correct section id for navigation', () => {
    const { container } = render(<Contact {...mockProps} />)
    const section = container.querySelector('section')

    expect(section).toHaveAttribute('id', 'contact')
  })

  it('should disable submit button when form is invalid', () => {
    render(<Contact {...mockProps} />)

    const submitButton = screen.getByRole('button', { name: 'Enviar Mensagem' })

    expect(submitButton).toBeDisabled()
  })

  it('should enable submit button when all fields are valid', () => {
    render(<Contact {...mockProps} />)

    const nameInput = screen.getByLabelText('Nome')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Mensagem')
    const submitButton = screen.getByRole('button', { name: 'Enviar Mensagem' })

    expect(submitButton).toBeDisabled()

    fireEvent.change(nameInput, { target: { value: 'João Silva' } })
    expect(submitButton).toBeDisabled()

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } })
    expect(submitButton).toBeDisabled()

    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })
    expect(submitButton).toBeDisabled()

    fireEvent.change(messageInput, {
      target: { value: 'Olá, gostaria de conversar!' },
    })
    expect(submitButton).not.toBeDisabled()
  })

  it('should show validation error for invalid email', () => {
    render(<Contact {...mockProps} />)

    const emailInput = screen.getByLabelText('Email')

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } })

    expect(screen.getByText('Email inválido')).toBeInTheDocument()
  })

  it('should not show validation error for valid email', () => {
    render(<Contact {...mockProps} />)

    const emailInput = screen.getByLabelText('Email')

    fireEvent.change(emailInput, { target: { value: 'joao@example.com' } })

    expect(screen.queryByText('Email inválido')).not.toBeInTheDocument()
  })
})
