import { Inter } from 'next/font/google'

const inter = Inter({ weight: ['300', '400'], subsets: ['latin'] })

export function Layout ({ children }) {
  return (
    <main className={`${inter.className}`}>
      {children}
    </main>
  )
}
