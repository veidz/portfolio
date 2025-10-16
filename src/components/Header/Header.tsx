'use client'

import { useState } from 'react'
import { NavLink } from './Header.types'

const navLinks: NavLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/veidz', external: true },
  { label: 'GitHub', href: 'https://github.com/veidz', external: true },
  { label: 'WhatsApp', href: 'https://wa.me/5511966051750', external: true },
  { label: 'Email', href: 'mailto:joaovictorveidz@gmail.com', external: false },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-header backdrop-blur-sm border-b border'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-brand tracking-tight font-family-pacifico'>
          Veidz
        </h1>

        <nav className='hidden md:flex items-center gap-6'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className='text-sm text-secondary hover:text-brand transition-colors duration-200'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center'
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-0.5 w-full bg-secondary transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-secondary transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-secondary transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='container mx-auto px-4 py-4 flex flex-col gap-4 border-t border'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={closeMenu}
              className='text-sm text-secondary hover:text-brand transition-colors duration-200 py-2'
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
