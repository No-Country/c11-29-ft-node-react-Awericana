import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
export default function Home () {
  return (
    <Layout>
        <Head>
        <title>Inicio</title>
      </Head>
      <Header />
    </Layout>
  )
}
