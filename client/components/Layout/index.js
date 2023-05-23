import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Footer'
import Banner from '../Banner'
import Card from '../Card'
import Categories from '../Category/Categories'

const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] })

export function Layout ({ children }) {
  return (
    <main className={`${roboto.className}`}>
      {children}
      <Banner/>
      
      <div className='p-4'>
        <section>
            <Categories/>
        </section>

        <section className='flex flex-wrap justify-center'>
            <Card
                precio={400}
                titulo={'Remera'}
                talleMedidas={'M'}
            />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
      </div>

      <Footer/>
    </main>
  )
}
