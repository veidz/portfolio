import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-950'>
      <Header />
      <Hero
        name='João Victor Veidz'
        title='Engenheiro de Software & Desenvolvedor Full Stack'
        description='5 anos de experiência construindo soluções web modernas e escaláveis com React, Next.js, Node.js e muito mais.'
      />
    </div>
  )
}
