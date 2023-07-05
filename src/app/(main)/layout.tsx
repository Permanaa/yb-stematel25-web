import { Chonburi } from 'next/font/google'

const chonburi = Chonburi({ weight: "400", subsets: ['latin'] })

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen'>
      <header className="sticky top-0 backdrop-blur">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <p>Menu</p>
          <div className={`flex gap-2 items-end ${chonburi.className}`}>
            <div className="w-3 h-6 md:w-6 md:h-9 bg-red-600" />
            <p className="text-xl md:text-2xl font-bold">YB25</p>
          </div>
          <p>Masuk</p>
        </div>
      </header>
      {children}
    </div>
  )
}
