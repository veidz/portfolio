'use client'

import { motion } from 'framer-motion'
import { SkillsProps } from './Skills.types'

export const Skills = ({ title, subtitle, skills }: SkillsProps) => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <section
      id='skills'
      className='min-h-screen flex items-center justify-center bg-bg-primary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <motion.h2
              className='text-4xl md:text-5xl font-bold text-text-primary mb-4'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className='text-lg md:text-xl text-text-secondary'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          </div>

          <div className='space-y-12'>
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className='text-2xl font-bold text-brand mb-6'>
                  {category}
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className='bg-bg-card p-6 rounded-lg border border-border-primary hover:border-brand transition-colors'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className='flex justify-between items-center mb-3'>
                          <h4 className='text-lg font-semibold text-text-primary'>
                            {skill.name}
                          </h4>
                          <span className='text-sm text-brand font-medium'>
                            {skill.level}%
                          </span>
                        </div>
                        <div className='w-full bg-bg-secondary rounded-full h-2'>
                          <motion.div
                            className='bg-brand h-2 rounded-full'
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.5 + skillIndex * 0.1,
                              duration: 1,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
