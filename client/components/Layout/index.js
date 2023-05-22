import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Footer'
import Banner from '../Banner'

const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] })

export function Layout ({ children }) {
  return (
    <main className={`${roboto.className}`}>
      {children}
      <Banner/>
      <Footer/>
    </main>
  )
}
