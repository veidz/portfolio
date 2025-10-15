import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'

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
    </div>
  )
}
