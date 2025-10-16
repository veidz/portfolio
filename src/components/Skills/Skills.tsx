'use client'

import { SkillsProps } from './Skills.types'

export const Skills = ({ title, subtitle, skills }: SkillsProps) => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <section
      id='skills'
      className='min-h-screen flex items-center justify-center bg-primary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>
              {title}
            </h2>
            <p className='text-lg md:text-xl text-secondary'>{subtitle}</p>
          </div>

          <div className='space-y-12'>
            {categories.map((category) => (
              <div key={category}>
                <h3 className='text-2xl font-bold text-brand mb-6'>
                  {category}
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className='bg-card p-6 rounded-lg border border-border hover:border-brand transition-colors'
                      >
                        <div className='flex justify-between items-center mb-3'>
                          <h4 className='text-lg font-semibold text-primary'>
                            {skill.name}
                          </h4>
                          <span className='text-sm text-brand font-medium'>
                            {skill.level}%
                          </span>
                        </div>
                        <div className='w-full bg-secondary rounded-full h-2'>
                          <div
                            className='bg-brand h-2 rounded-full transition-all duration-500'
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
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
