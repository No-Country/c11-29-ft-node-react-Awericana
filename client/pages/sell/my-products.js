import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import MyProductsCard from '@/components/MyProductsCard'
import Head from 'next/head'
import { useMyPublications } from '@/hooks/useMyPublications'

import { Loading } from '@/components/Loading'

export default function MyProducts () {
  const { publications, isLoading } = useMyPublications()

  return (
    <Layout>
      <Head>
        <title>Mis productos | Awericana</title>
      </Head>
      <Header disabled={true}/>
      <section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
      <h1 className='py-12 px-4 font-normal text-lg leading-5 xl:text-3xl xl:leading-loose'>Mis productos</h1>
      {!isLoading
        ? publications.map(pub => {
          return <MyProductsCard key={pub.id} title={pub.titulo} price={pub.precio} imgUrl={pub.imagenPortada}/>
        })
        : <Loading />}
      </section>
    </Layout>
  )
}

// export function getServerSideProps () {

// }
