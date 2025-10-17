'use client'

import { ExperienceProps } from './Experience.types'

export const Experience = ({
  title,
  subtitle,
  experiences,
}: ExperienceProps) => {
  return (
    <section
      id='experience'
      className='min-h-screen flex items-center justify-center bg-bg-secondary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-4'>
              {title}
            </h2>
            <p className='text-lg md:text-xl text-text-secondary'>{subtitle}</p>
          </div>

          <div className='space-y-8'>
            {experiences.map((experience, index) => (
              <div
                key={index}
                className='bg-bg-card rounded-lg p-6 md:p-8 border border-border-primary hover:border-brand transition-colors'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                  <div>
                    <h3 className='text-2xl font-bold text-text-primary mb-1'>
                      {experience.role}
                    </h3>
                    <p className='text-xl text-brand font-semibold'>
                      {experience.company}
                    </p>
                  </div>
                  <span className='text-sm text-text-muted mt-2 md:mt-0'>
                    {experience.period}
                  </span>
                </div>

                <p className='text-text-secondary mb-4 leading-relaxed'>
                  {experience.description}
                </p>

                {experience.achievements.length > 0 && (
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-text-primary mb-2'>
                      Principais Conquistas:
                    </h4>
                    <ul className='space-y-2'>
                      {experience.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className='flex items-start gap-2 text-text-secondary'
                        >
                          <span className='text-brand mt-1'>▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className='flex flex-wrap gap-2'>
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-bg-primary text-text-secondary text-sm rounded-full border border-border-primary'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
