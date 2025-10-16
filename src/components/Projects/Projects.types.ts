export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
}

export interface ProjectsProps {
  title: string
  subtitle: string
  projects: Project[]
}
