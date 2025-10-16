'use client'

import { HeroProps } from './Hero.types'

export const Hero = ({ name, title, description }: HeroProps) => {
  const nameParts = name.split(' ')
  const lastWord = nameParts[nameParts.length - 1]
  const restOfName = nameParts.slice(0, -1).join(' ')

  return (
    <section className='relative min-h-screen flex items-center justify-center bg-primary pt-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-bold text-primary mb-4'>
            <span>{restOfName} </span>
            <span className='font-family-pacifico text-brand'>{lastWord}</span>
          </h1>
          <h2 className='text-2xl md:text-4xl text-brand mb-6'>{title}</h2>
          <p className='text-lg md:text-xl text-secondary max-w-2xl mx-auto'>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
