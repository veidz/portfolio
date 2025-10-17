'use client'

import { motion } from 'framer-motion'
import { HeroProps } from './Hero.types'

export const Hero = ({ name, title, description }: HeroProps) => {
  const nameParts = name.split(' ')
  const lastWord = nameParts[nameParts.length - 1]
  const restOfName = nameParts.slice(0, -1).join(' ')

  return (
    <section className='relative min-h-screen flex items-center justify-center bg-bg-primary pt-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h1
            className='text-5xl md:text-7xl font-bold text-text-primary mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>{restOfName} </span>
            <motion.span
              className='font-family-pacifico text-brand'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {lastWord}
            </motion.span>
          </motion.h1>
          <motion.h2
            className='text-2xl md:text-4xl text-brand mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-text-secondary max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
