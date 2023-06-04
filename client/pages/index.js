import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Categories from '@/components/Category/Categories'
import { useSession } from '@/hooks/useSession'
import Link from 'next/link'

export default function Home ({ userData, publicaciones = [] }) {
  const { session } = useSession(userData)

  return (
    <Layout>
      <Head>
        <title>Inicio | Awericana</title>
      </Head>
      <Header />

      <Banner />

      <div className="p-4">
        <section>
          <Categories />
        </section>
        <section className='flex flex-wrap justify-center'>
    {console.log(publicaciones)}
          {publicaciones.length > 0 && publicaciones.map(pub => {
            console.log(pub)
            return (
              <Link href={'/detail/:id'} as={`/detail/${pub.id}`} key={pub.id}>
                <Card
                  precio={pub.precio}
                  titulo={pub.titulo}
                  talleMedidas={pub.talle.nombre}
                  imgSrc={pub.imagenPortada || null}
                   />
              </Link>
            )
          })}
        </section>
      </div>
    </Layout>
  );
}


export async function getServerSideProps (ctx) {
  const userDataResponse = await fetch('http://' + ctx.req.headers.host + '/api/session')
  const userData = await userDataResponse.json()
  const publicacionesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/publicaciones?offset=0&limit=100`)
  const publicaciones = await publicacionesResponse.json()

  // const bannerResponse = await fetch(domain + '/banner')
  // const banner = await bannerResponse.json() // Las imagenes no estan cargadas

  return {
    props: {
      userData: userData?.error ? null : userData.user,
      publicaciones: publicaciones.publicaciones
    }
  }
}
