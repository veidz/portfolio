export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface ExperienceProps {
  title: string
  subtitle: string
  experiences: ExperienceItem[]
}
