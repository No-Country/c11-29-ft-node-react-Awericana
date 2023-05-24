import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'

function profile () {
  return (
    <Layout>
      <Head>
        <title>Mis Datos</title>
      </Head>
      <Header />
      <section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
        <h1 className='py-12 px-4 font-normal text-lg leading-5'>Mis datos</h1>
        <div className='flex px-6 py-4 mb-2 justify-between shadow-md'>
          <div className='flex flex-col gap-2 font-light text-black text-sm leading-5'>
              <p>Nombre y Apellido</p>
              <p>Documento de Identidad</p>
              <p>Fecha de nacimiento</p>
          </div>
          <Link href={'profile/modify-data'} className='my-auto font-normal text-xs leading-5 underline'>
            Modificar
          </Link>
        </div>
        <div className='flex px-6 py-4 justify-between shadow-md'>
          <div className='flex flex-col gap-2 font-light text-black text-sm leading-5'>
              <p>Email</p>
              <p>Contraseña</p>
          </div>
          <Link href={'profile/modify-credentials'} className='my-auto font-normal text-xs leading-5 underline'>
            Modificar
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default profile
