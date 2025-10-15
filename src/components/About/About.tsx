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
      className='min-h-screen flex items-center justify-center bg-slate-900 py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-8 text-center'>
            {title}
          </h2>

          <div className='bg-slate-800 rounded-lg p-8 md:p-12 shadow-xl'>
            <p className='text-lg md:text-xl text-gray-300 mb-8 leading-relaxed'>
              {description}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-[#A91D3A] rounded-lg flex items-center justify-center'>
                  <span className='text-2xl font-bold text-white'>
                    {yearsOfExperience}
                  </span>
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Anos de</p>
                  <p className='text-lg font-semibold text-white'>
                    Experiência
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-[#A91D3A] rounded-lg flex items-center justify-center'>
                  <span className='text-2xl'>📍</span>
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Localização</p>
                  <p className='text-lg font-semibold text-white'>{location}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>Destaques</h3>
              <ul className='space-y-3'>
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-3 text-gray-300'
                  >
                    <span className='text-[#A91D3A] mt-1'>▸</span>
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
