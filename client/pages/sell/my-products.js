import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import MyProductsCard from '@/components/MyProductsCard'
import Head from 'next/head'

function MyProducts () {
  return (
    <Layout>
      <Head>
        <title>Mis productos</title>
      </Head>
      <Header/>
      <section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
      <h1 className='py-12 px-4 font-normal text-lg leading-5 xl:text-3xl xl:leading-loose'>Mis productos</h1>
      <MyProductsCard title={'Titulo 1'} price={'Precio 1'} />
      <MyProductsCard title={'Título 2'} price={'Precio 2'} />
      </section>
    </Layout>
  )
}

export default MyProducts
