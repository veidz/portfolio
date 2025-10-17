'use client'

import { Mail, MessageCircle, MapPin, Github, Linkedin } from 'lucide-react'
import { ContactProps } from './Contact.types'

const iconMap = {
  email: Mail,
  whatsapp: MessageCircle,
  location: MapPin,
  github: Github,
  linkedin: Linkedin,
}

export const Contact = ({
  title,
  subtitle,
  contactInfo,
  socialLinks,
}: ContactProps) => {
  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center bg-bg-secondary py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-4'>
              {title}
            </h2>
            <p className='text-lg md:text-xl text-text-secondary'>{subtitle}</p>
          </div>

          <div className='space-y-12'>
            <div>
              <h3 className='text-2xl font-bold text-text-primary mb-6 text-center'>
                Informações de Contato
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon]
                  return (
                    <div
                      key={index}
                      className='flex flex-col items-center text-center p-6 bg-bg-card border border-border-primary rounded-lg hover:border-brand transition-colors'
                    >
                      <div className='text-brand mb-4'>
                        <IconComponent size={32} strokeWidth={2} />
                      </div>
                      <p className='text-sm text-text-secondary mb-2'>
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className='text-text-primary hover:text-brand transition-colors font-medium'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className='text-text-primary font-medium'>
                          {info.value}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className='text-xl font-bold text-text-primary mb-6 text-center'>
                Redes Sociais
              </h4>
              <div className='flex gap-4 justify-center'>
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon]
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-14 h-14 flex items-center justify-center bg-bg-card border border-border-primary rounded-lg hover:border-brand hover:scale-110 transition-all duration-300 text-text-secondary hover:text-brand'
                      aria-label={social.label}
                    >
                      <IconComponent size={28} strokeWidth={2} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
