'use client'

import { useState } from 'react'
import { Mail, MessageCircle, MapPin, Github, Linkedin } from 'lucide-react'
import { ContactProps } from './Contact.types'

const iconMap = {
  email: Mail,
  whatsapp: MessageCircle,
  location: MapPin,
  github: Github,
  linkedin: Linkedin,
}

export const Contact = ({
  title,
  subtitle,
  contactInfo,
  socialLinks,
}: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isFormValid = (): boolean => {
    return (
      formData.name.trim().length > 0 &&
      validateEmail(formData.email) &&
      formData.message.trim().length > 0
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid()) {
      return
    }

    setFormStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setFormStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Erro ao enviar mensagem. Tente novamente.',
      )

      setTimeout(() => {
        setFormStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center bg-bg-secondary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-4'>
              {title}
            </h2>
            <p className='text-lg md:text-xl text-text-secondary'>{subtitle}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-bold text-text-primary mb-6'>
                Informações de Contato
              </h3>

              <div className='space-y-6 mb-8'>
                {contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon]
                  return (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='text-brand flex-shrink-0'>
                        <IconComponent size={28} strokeWidth={2} />
                      </div>
                      <div>
                        <p className='text-sm text-text-secondary mb-1'>
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className='text-text-primary hover:text-brand transition-colors'
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className='text-text-primary'>{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div>
                <h4 className='text-xl font-bold text-text-primary mb-4'>
                  Redes Sociais
                </h4>
                <div className='flex gap-4'>
                  {socialLinks.map((social, index) => {
                    const IconComponent = iconMap[social.icon]
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 flex items-center justify-center bg-bg-card border border-border-primary rounded-lg hover:border-brand hover:scale-110 transition-all duration-300 text-text-secondary hover:text-brand'
                        aria-label={social.label}
                      >
                        <IconComponent size={24} strokeWidth={2} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-text-primary mb-6'>
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-text-secondary mb-2'
                  >
                    Nome
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formStatus === 'sending'}
                    className='w-full px-4 py-3 bg-bg-card border border-border-primary rounded-lg focus:outline-none focus:border-brand transition-colors text-text-primary disabled:opacity-50'
                    placeholder='Seu nome'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-text-secondary mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={formStatus === 'sending'}
                    className={`w-full px-4 py-3 bg-bg-card border rounded-lg focus:outline-none transition-colors text-text-primary disabled:opacity-50 ${
                      formData.email.length > 0
                        ? validateEmail(formData.email)
                          ? 'border-green-500 focus:border-green-500'
                          : 'border-red-500 focus:border-red-500'
                        : 'border-border-primary focus:border-brand'
                    }`}
                    placeholder='seu@email.com'
                  />
                  {formData.email.length > 0 &&
                    !validateEmail(formData.email) && (
                      <p className='text-xs text-red-500 mt-1'>
                        Email inválido
                      </p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-text-secondary mb-2'
                  >
                    Mensagem
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={formStatus === 'sending'}
                    rows={5}
                    className='w-full px-4 py-3 bg-bg-card border border-border-primary rounded-lg focus:outline-none focus:border-brand transition-colors text-text-primary resize-none disabled:opacity-50'
                    placeholder='Sua mensagem...'
                  />
                </div>

                <button
                  type='submit'
                  disabled={formStatus === 'sending' || !isFormValid()}
                  className='w-full px-6 py-3 bg-brand text-text-primary rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {formStatus === 'sending'
                    ? 'Enviando...'
                    : formStatus === 'success'
                      ? '✓ Enviado com sucesso!'
                      : 'Enviar Mensagem'}
                </button>

                {formStatus === 'success' && (
                  <p className='text-center text-sm text-brand'>
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className='text-center text-sm text-red-500'>
                    {errorMessage ||
                      'Erro ao enviar mensagem. Tente novamente.'}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
