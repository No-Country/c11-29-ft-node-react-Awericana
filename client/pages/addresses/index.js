import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import MyAddressCard from '@/components/MyAddressCard'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Addresses () {
  return (
    <Layout>
      <Head>
        <title>Direcciones</title>
      </Head>
      <Header />
      <section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
        <h1 className='py-12 px-4 font-normal text-lg leading-5'>Direcciones</h1>
        <MyAddressCard address={'Nombre de calle 123, ciudad, pais'}/>
        <div className='flex px-6 py-4 justify-start items-center shadow-md h-[79px] xl:w-[950px] xl:h-[120px]'>
          <Link href={'/addresses/add-address'} className='my-auto font-normal text-xs xl:text-lg leading-5 underline'>
            Agregar dirección
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Addresses
