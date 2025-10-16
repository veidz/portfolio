import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Skills } from '@/components/Skills/Skills'

export default function Home() {
  return (
    <div className='min-h-screen bg-bg-primary'>
      <Header />
      <Hero
        name='João Victor Veidz'
        title='Engenheiro de Software'
        description='5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.'
      />
      <About
        title='Sobre Mim'
        description='Engenheiro de Software com 5 anos de experiência em criar soluções web escaláveis e performáticas. Apaixonado por código limpo, arquitetura de software e novas tecnologias. Sempre em busca de desafios que me permitam evoluir e entregar valor real aos usuários.'
        yearsOfExperience={5}
        location='São Paulo, Brasil'
        highlights={[
          'Conhecimento vasto em React, Next.js, TypeScript, Node.js e NestJS',
          'Experiência com microserviços e arquitetura escalável',
          'Design Systems e componentização avançada',
          'TDD e práticas de código limpo',
          'Liderança técnica e mentoria de desenvolvedores',
        ]}
      />
      <Skills
        title='Habilidades'
        subtitle='Tecnologias e ferramentas que domino'
        skills={[
          { name: 'React', level: 90, category: 'Frontend' },
          { name: 'Next.js', level: 90, category: 'Frontend' },
          { name: 'TypeScript', level: 95, category: 'Frontend' },
          { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
          { name: 'Angular', level: 70, category: 'Frontend' },
          { name: 'Storybook', level: 80, category: 'Frontend' },
          { name: 'Node.js', level: 90, category: 'Backend' },
          { name: 'NestJS', level: 85, category: 'Backend' },
          { name: 'SQL', level: 85, category: 'Backend' },
          { name: 'MongoDB', level: 80, category: 'Backend' },
          { name: 'Firebase', level: 80, category: 'Backend' },
          { name: 'GraphQL', level: 80, category: 'Backend' },
          { name: 'Redis', level: 70, category: 'Backend' },
          { name: 'RabbitMQ', level: 70, category: 'Backend' },
          { name: 'Mensageria', level: 70, category: 'Backend' },
          { name: 'Microserviços', level: 80, category: 'Backend' },
          { name: 'REST APIs', level: 90, category: 'Backend' },
          { name: 'Python', level: 80, category: 'Backend' },
          { name: 'Django', level: 75, category: 'Backend' },
          { name: 'Flask', level: 75, category: 'Backend' },
          { name: 'FastAPI', level: 75, category: 'Backend' },
          { name: 'Java', level: 80, category: 'Backend' },
          { name: 'Spring Boot', level: 70, category: 'Backend' },
          { name: 'C#', level: 85, category: 'Backend' },
          { name: '.NET', level: 80, category: 'Backend' },
          { name: 'React Native', level: 80, category: 'Mobile' },
          { name: 'Expo', level: 80, category: 'Mobile' },
          { name: 'Docker', level: 85, category: 'DevOps' },
          { name: 'AWS', level: 75, category: 'DevOps' },
          { name: 'CI/CD', level: 80, category: 'DevOps' },
          { name: 'Git', level: 95, category: 'DevOps' },
          { name: 'Jest', level: 85, category: 'Testes' },
          { name: 'React Testing Library', level: 85, category: 'Testes' },
          { name: 'Cypress', level: 80, category: 'Testes' },
          { name: 'TDD', level: 90, category: 'Testes' },
          { name: 'NUnit', level: 80, category: 'Testes' },
          { name: 'xUnit', level: 80, category: 'Testes' },
          { name: 'JUnit', level: 75, category: 'Testes' },
          { name: 'Arquitetura Limpa', level: 85, category: 'Outros' },
          { name: 'DDD', level: 80, category: 'Outros' },
          { name: 'SCRUM', level: 90, category: 'Outros' },
          { name: 'Kanban', level: 90, category: 'Outros' },
          { name: 'Documentação', level: 90, category: 'Outros' },
          { name: 'Colaboração', level: 95, category: 'Outros' },
          { name: 'Mentoria', level: 85, category: 'Outros' },
          { name: 'Trabalho em Equipe', level: 90, category: 'Outros' },
        ]}
      />
    </div>
  )
}
