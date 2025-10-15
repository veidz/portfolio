'use client'

import { AboutProps } from './About.types'

export const About = ({
  title,
  description,
  yearsOfExperience,
  location,
  highlights,
}: AboutProps) => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center bg-bg-secondary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-8 text-center'>
            {title}
          </h2>

          <div className='bg-bg-card rounded-lg p-8 md:p-12 shadow-xl'>
            <p className='text-lg md:text-xl text-text-secondary mb-8 leading-relaxed'>
              {description}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-brand rounded-lg flex items-center justify-center'>
                  <span className='text-2xl font-bold text-text-primary'>
                    {yearsOfExperience}
                  </span>
                </div>
                <div>
                  <p className='text-sm text-text-muted'>Anos de</p>
                  <p className='text-lg font-semibold text-text-primary'>
                    Experiência
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-brand rounded-lg flex items-center justify-center'>
                  <span className='text-2xl'>📍</span>
                </div>
                <div>
                  <p className='text-sm text-text-muted'>Localização</p>
                  <p className='text-lg font-semibold text-text-primary'>
                    {location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-text-primary mb-4'>
                Destaques
              </h3>
              <ul className='space-y-3'>
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-3 text-text-secondary'
                  >
                    <span className='text-brand mt-1'>▸</span>
                    <span className='text-lg'>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
