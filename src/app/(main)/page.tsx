import { Chonburi } from 'next/font/google'
import Video from './video'

const chonburi = Chonburi({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container mx-auto p-4 mt-6 lg:mt-32'>
      <h2 className={chonburi.className + ' text-5xl lg:text-[128px] text-center'}>Alumni 25</h2>
      <div className='flex justify-center lg:gap-60 lg:text-7xl font-bold text-secondary lg:mt-40'>
        <p>TJA</p>
        <p>TKJ</p>
        <p>RPL</p>
      </div>
      <Video />
    </main>
  )
}
