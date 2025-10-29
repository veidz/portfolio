'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NavLink } from './Header.types'

const navLinks: NavLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/veidz', external: true },
  { label: 'GitHub', href: 'https://github.com/veidz', external: true },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511966051750?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.',
    external: true,
  },
  { label: 'Email', href: 'mailto:joaovictorveidz@gmail.com', external: false },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-bg-header backdrop-blur-sm border-b border-border-primary transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{ opacity: headerOpacity }}
    >
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <motion.h1
          className='text-3xl font-bold text-brand tracking-tight font-family-pacifico'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Veidz
        </motion.h1>

        <nav className='hidden md:flex items-center gap-6'>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className='text-sm text-text-secondary hover:text-brand transition-colors duration-200'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center'
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className='block h-0.5 w-full bg-text-secondary'
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className='block h-0.5 w-full bg-text-secondary'
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className='block h-0.5 w-full bg-text-secondary'
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <motion.div
        className='md:hidden overflow-hidden'
        initial={false}
        animate={
          isMenuOpen
            ? { height: 'auto', opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className='container mx-auto px-4 py-4 flex flex-col gap-4 border-t border-border-primary'>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={closeMenu}
              className='text-sm text-text-secondary hover:text-brand transition-colors duration-200 py-2'
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  )
}
