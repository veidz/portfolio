'use client'

import { motion } from 'framer-motion'
import { AboutProps } from './About.types'

export const About = ({
  title,
  description,
  yearsOfExperience,
  location,
  highlights,
}: AboutProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center bg-bg-secondary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-text-primary mb-8 text-center'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>

          <motion.div
            className='bg-bg-card rounded-lg p-8 md:p-12 shadow-xl'
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className='text-lg md:text-xl text-text-secondary mb-8 leading-relaxed'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {description}
            </motion.p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <motion.div
                className='flex items-center gap-4'
                variants={statVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div
                className='flex items-center gap-4'
                variants={statVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className='w-12 h-12 bg-brand rounded-lg flex items-center justify-center'>
                  <span className='text-2xl'>📍</span>
                </div>
                <div>
                  <p className='text-sm text-text-muted'>Localização</p>
                  <p className='text-lg font-semibold text-text-primary'>
                    {location}
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.h3
                className='text-2xl font-bold text-text-primary mb-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Destaques
              </motion.h3>
              <ul className='space-y-3'>
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className='flex items-start gap-3 text-text-secondary'
                    variants={listItemVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className='text-brand mt-1'>▸</span>
                    <span className='text-lg'>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
