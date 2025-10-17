'use client'

import { motion } from 'framer-motion'
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
            <div>
              <motion.h3
                className='text-2xl font-bold text-text-primary mb-6 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Informações de Contato
              </motion.h3>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon]
                  return (
                    <motion.div
                      key={index}
                      className='flex flex-col items-center text-center p-6 bg-bg-card border border-border-primary rounded-lg hover:border-brand transition-colors'
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <motion.div
                        className='text-brand mb-4'
                        initial={{ rotate: -180, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      >
                        <IconComponent size={32} strokeWidth={2} />
                      </motion.div>
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
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <motion.h4
                className='text-xl font-bold text-text-primary mb-6 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Redes Sociais
              </motion.h4>
              <div className='flex gap-4 justify-center'>
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon]
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-14 h-14 flex items-center justify-center bg-bg-card border border-border-primary rounded-lg hover:border-brand text-text-secondary hover:text-brand'
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent size={28} strokeWidth={2} />
                    </motion.a>
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
