import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] })

export function Layout ({ children }) {
  return (
    <main className={`${roboto.className}`}>
      {children}
    </main>
  )
}
