import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Skills } from '@/components/Skills/Skills'
import { Projects } from '@/components/Projects/Projects'
import { Experience } from '@/components/Experience/Experience'
import { Contact } from '@/components/Contact/Contact'

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
      <Experience
        title='Experiência Profissional'
        subtitle='Minha jornada no desenvolvimento de software'
        experiences={[
          {
            company: 'WeFit - Digital Service Design',
            role: 'Engenheiro de Software Pleno',
            period: '2024 - 2025',
            description:
              'Desenvolvimento para o novo portal do cliente da empresa Porto, utilizando React, Next.js e Storybook para o front-end e Node.js com NestJS para o back-end. Foco em performance, escalabilidade e experiência do usuário.',
            technologies: [
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Storybook',
              'Node.js',
              'NestJS',
              'Microsserviços',
              'Docker',
              'AWS',
              'Terraform',
              'Jest',
              'Documentação',
            ],
            achievements: [
              'Implementação de documentação técnica que reduziu onboarding em 30%',
              'Aumento de cobertura de testes de 40% para 100%',
            ],
          },
          {
            company: 'LUZ - Soluções Financeiras',
            role: 'Desenvolvedor Full Stack',
            period: '2022 - 2023',
            description:
              'Desenvolvimento full stack de plataforma SaaS, trabalhando desde o MVP até escalar para milhares de usuários. Responsável por frontend, backend e DevOps.',
            technologies: [
              'React',
              'Angular',
              'MongoDB',
              'MySQL',
              'Redis',
              'Docker',
              'CI/CD',
              'Python',
              'Django',
              'Flask',
              'C#',
              '.NET',
              'RabbitMQ',
              'Mensageria',
            ],
            achievements: [
              'Otimização de imagem de Docker em 80%, reduzindo custos de infraestrutura e tempo de deploy',
              'Otimização de queries SQL reduzindo tempo de resposta em 70%',
              'Configuração de pipeline CI/CD com deploy automático',
            ],
          },
          {
            company: 'Freelancer',
            role: 'Desenvolvedor Full Stack',
            period: '2020 - 2022',
            description:
              'Desenvolvimento de aplicações web e mobile para diversos clientes, desde landing pages até sistemas complexos. Foco em entregar soluções de alta qualidade que atendam às necessidades dos clientes.',
            technologies: [
              'React',
              'TypeScript',
              'Node.js',
              'Express',
              'SQL',
              'NoSQL',
              'Firebase',
              'React Native',
              'Landing Pages',
              'PWA',
            ],
            achievements: [
              'Entrega de 10 projetos para clientes de diferentes segmentos',
              'Lighthouse score para 95+ em todos os projetos',
            ],
          },
        ]}
      />
      <Projects
        title='Projetos'
        subtitle='Alguns dos meus trabalhos recentes'
        projects={[
          {
            title: 'Portfolio Pessoal',
            description:
              'Portfolio pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meus projetos, habilidades e experiência profissional de forma elegante e responsiva.',
            image: '🖥',
            technologies: [
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Tailwind CSS',
              'React Testing Library',
              'Cypress',
            ],
            // TODO: Add Live URL from deployed website
            liveUrl: 'https://github.com/veidz/portfolio',
            githubUrl: 'https://github.com/veidz/portfolio',
            highlights: [
              'Desenvolvido com Next.js e Tailwind CSS',
              'Design responsivo e moderno',
              'Inclui seções de projetos, habilidades e contato',
              'Testes unitários e end-to-end implementados',
            ],
          },
          {
            title: 'Collaborative Task Management',
            description:
              'Aplicativo de gerenciamento de tarefas, colaboração em tempo real, notificações e comentários',
            image: '📋',
            technologies: [
              'TurboRepo',
              'React',
              'Tailwind',
              'TypeScript',
              'TanStack Query',
              'TanStack Router',
              'Shadcn UI',
              'WebSockets',
              'PostgreSQL',
              'Node.js',
              'NestJS',
              'RabbitMQ',
              'Api Gateway',
              'Microserviços',
              'Docker',
            ],
            githubUrl: 'https://github.com/veidz/collaborative-task-management',
            highlights: [
              'Colaboração em tempo real com WebSockets',
              'Arquitetura de microserviços com API Gateway',
              'Notificações e comentários em tarefas',
              'Interface moderna com Shadcn UI',
            ],
          },
        ]}
      />
      <Contact
        title='Entre em Contato'
        subtitle='Vamos trabalhar juntos no seu próximo projeto'
        contactInfo={[
          {
            icon: 'email' as const,
            label: 'Email',
            value: 'joaovictorveidz@gmail.com',
            link: 'mailto:joaovictorveidz@gmail.com',
          },
          {
            icon: 'whatsapp' as const,
            label: 'WhatsApp',
            value: '+55 11 96605-1750',
            link: 'https://wa.me/5511966051750?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
          },
          {
            icon: 'location' as const,
            label: 'Localização',
            value: 'São Paulo, Brasil',
          },
        ]}
        socialLinks={[
          {
            icon: 'github' as const,
            label: 'GitHub',
            url: 'https://github.com/veidz',
          },
          {
            icon: 'linkedin' as const,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/veidz',
          },
        ]}
      />
    </div>
  )
}
