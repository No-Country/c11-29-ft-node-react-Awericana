import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Categories from '@/components/Category/Categories'
import { useSession } from '@/hooks/useSession'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home ({ userData, publicaciones = [], fakeData = [] }) {
  const { session } = useSession(userData)

  return (
    <Layout>

      <Head>
        <title>Inicio | Awericana</title>
      </Head>
      <Header />

      <Banner/>

      <div className='p-4'>
        <section>
            <Categories/>
        </section>
        <section className='flex flex-wrap justify-center'>

          {publicaciones.length > 0 && publicaciones.map(pub => {
            return (
              <Link href={'/detail/:id'} key={pub.id}>
                <Card
                  precio={pub.precio}
                  titulo={pub.titulo}
                  talleMedidas={pub.talle.nombre}
                   />
              </Link>
            )
          })}

          {fakeData.length > 0 && fakeData.map(pub => { // Eliminar cuando se usen publicaciones reales
            return (
              <Link href={'/detail/:id'} key={pub.fecha}>
                <Card
                  precio={pub.precio}
                  titulo={pub.producto.nombre}
                  talleMedidas={pub.producto.talle}
                  imgSrc={pub.producto.imagen[0]}
                   />
              </Link>
            )
          })}

        </section>
      </div>

    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const userDataResponse = await fetch('http://' + ctx.req.headers.host + '/api/session')

  // const publicacionesResponse = await fetch(domain + '/publicaciones?offset=0&limit=100') //Publicaciones reales
  const publicacionesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fake/all`) // Publicaciones fake
  const publicaciones = await publicacionesResponse.json()

  // const bannerResponse = await fetch(domain + '/banner')
  // const banner = await bannerResponse.json() // Las imagenes no estan cargadas

  const userData = await userDataResponse.json()

  return {
    props: {
      userData: userData?.error ? null : userData.user,
      fakeData: publicaciones,
      publicaciones: []
    }
  }
}
