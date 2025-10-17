export interface Skill {
  name: string
  level: number
  category: string
}

export interface SkillsProps {
  title: string
  subtitle: string
  skills: Skill[]
}
