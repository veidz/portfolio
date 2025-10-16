'use client'

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
            <h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-4'>
              {title}
            </h2>
            <p className='text-lg md:text-xl text-text-secondary'>{subtitle}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-bg-card rounded-lg overflow-hidden border border-border-primary hover:border-brand transition-all duration-300 flex flex-col h-full'
              >
                <div className='aspect-video bg-bg-secondary relative overflow-hidden'>
                  <div className='absolute inset-0 flex items-center justify-center text-6xl'>
                    {project.image}
                  </div>
                </div>

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
                        <li
                          key={i}
                          className='flex items-start gap-2 text-sm text-text-secondary'
                        >
                          <span className='text-brand mt-0.5 flex-shrink-0'>
                            ▸
                          </span>
                          <span className='line-clamp-2'>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='px-2 py-1 bg-bg-secondary text-text-secondary text-xs rounded'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-3 mt-auto pt-4 border-t border-border-primary'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center px-4 py-2 bg-brand text-text-primary rounded hover:opacity-90 transition-opacity text-sm font-medium'
                      >
                        Ver Projeto
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center px-4 py-2 border border-border-primary text-text-secondary rounded hover:border-brand hover:text-brand transition-colors text-sm font-medium'
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
