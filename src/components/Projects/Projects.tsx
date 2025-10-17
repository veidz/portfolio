'use client'

import { motion } from 'framer-motion'
import { ProjectsProps } from './Projects.types'

export const Projects = ({ title, subtitle, projects }: ProjectsProps) => {
  return (
    <section
      id='projects'
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

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className='bg-bg-card rounded-lg overflow-hidden border border-border-primary hover:border-brand transition-all duration-300 flex flex-col h-full'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className='aspect-video bg-bg-secondary relative overflow-hidden'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='absolute inset-0 flex items-center justify-center text-6xl'>
                    {project.image}
                  </div>
                </motion.div>

                <div className='p-6 flex flex-col h-full'>
                  <h3 className='text-xl font-bold text-text-primary mb-3'>
                    {project.title}
                  </h3>

                  <p className='text-text-secondary mb-6 line-clamp-3'>
                    {project.description}
                  </p>

                  {project.highlights.length > 0 && (
                    <ul className='space-y-2 mb-6'>
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className='flex items-start gap-2 text-sm text-text-secondary'
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        >
                          <span className='text-brand mt-0.5 flex-shrink-0'>
                            ▸
                          </span>
                          <span className='line-clamp-2'>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className='px-2 py-1 bg-bg-secondary text-text-secondary text-xs rounded'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className='flex gap-3 mt-auto pt-4 border-t border-border-primary'>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center px-4 py-2 bg-brand text-text-primary rounded hover:opacity-90 transition-opacity text-sm font-medium'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver Projeto
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center px-4 py-2 border border-border-primary text-text-secondary rounded hover:border-brand hover:text-brand transition-colors text-sm font-medium'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
