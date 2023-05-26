import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Categories from '@/components/Category/Categories'
import { useSession } from '@/hooks/useSession'

export default function Home ({ userData }) {
  const { session } = useSession(userData)

  return (
    <Layout>

      <Head>
        <title>Inicio</title>
      </Head>
      <Header />

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

    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const domain = ctx.req.headers.host
  const response = await fetch('http://' + domain + '/api/session')
  const userData = await response.json()

  return {
    props: {
      userData: userData?.error ? null : userData.user
    }
  }
}
