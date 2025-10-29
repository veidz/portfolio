'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { FooterProps } from './Footer.types'

export const Footer = ({
  name,
  year = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className='bg-bg-primary border-t border-border-primary py-8'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-text-secondary text-sm'>
            © {year}{' '}
            <span className='text-text-primary font-medium'>{name}</span>. Todos
            os direitos reservados.
          </div>

          <div className='flex items-center gap-6'>
            <a
              href='https://github.com/veidz'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-brand transition-colors'
              aria-label='GitHub'
            >
              <Github size={20} strokeWidth={2} />
            </a>
            <a
              href='https://linkedin.com/in/veidz'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-brand transition-colors'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a
              href='mailto:joaovictorveidz@gmail.com'
              className='text-text-secondary hover:text-brand transition-colors'
              aria-label='Email'
            >
              <Mail size={20} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
