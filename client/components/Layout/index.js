import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] })

export function Layout ({ children }) {
  return (
    <main className={`${roboto.className} relative pb-[96px] md:pb-[216px]`}>
      {children}
      <Footer/>
    </main>
  )
}
