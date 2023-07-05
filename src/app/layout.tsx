import './globals.css'
import { Roboto_Serif } from 'next/font/google'

const roboto_serif = Roboto_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'YB25',
  description: 'Year book alumni 25',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={roboto_serif.className}>{children}</body>
    </html>
  )
}
