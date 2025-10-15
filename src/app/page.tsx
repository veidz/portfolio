import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-950'>
      <Header />
      <main className='pt-20 px-4'>
        <div className='container mx-auto'>
          <h1 className='text-4xl text-white mb-4'>Portfolio em construção</h1>
          <p className='text-gray-300'>Header criado com sucesso!</p>
          <div className='h-[1000px]'></div>
        </div>
      </main>
    </div>
  )
}
