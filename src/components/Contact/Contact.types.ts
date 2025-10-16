export interface ContactInfo {
  icon: string
  label: string
  value: string
  link?: string
}

export interface SocialLink {
  icon: string
  label: string
  url: string
}

export interface ContactProps {
  title: string
  subtitle: string
  contactInfo: ContactInfo[]
  socialLinks: SocialLink[]
}
