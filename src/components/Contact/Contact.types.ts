export type IconType = 'email' | 'whatsapp' | 'location' | 'github' | 'linkedin'

export interface ContactInfo {
  icon: IconType
  label: string
  value: string
  link?: string
}

export interface SocialLink {
  icon: IconType
  label: string
  url: string
}

export interface ContactProps {
  title: string
  subtitle: string
  contactInfo: ContactInfo[]
  socialLinks: SocialLink[]
}
