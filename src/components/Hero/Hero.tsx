'use client'

import { HeroProps } from './Hero.types'

export const Hero = ({ name, title, description }: HeroProps) => {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-slate-950 pt-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
            {name}
          </h1>
          <h2 className='text-2xl md:text-4xl text-[#A91D3A] mb-6'>{title}</h2>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
