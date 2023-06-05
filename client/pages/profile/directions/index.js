import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'

export default function Direccion () {
  return (
    <div>
        <Head>
        <title>Mis Direcion</title>
      </Head>
        <Header/>
        <section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
        <h1 className='py-12 px-4 font-normal text-lg leading-5'>Mis Direcciones</h1>
        <div className='flex px-6 py-4 mb-2 justify-between shadow-md'>
          <div className='flex flex-col gap-2 font-light text-black text-sm leading-5'>
              <p>Direccion 1</p>
          </div>
          <Link href={'/profile/directions/edit'} className='my-auto font-normal text-xs leading-5 underline'>
            Modificar
          </Link>
        </div>
        <div className='flex px-6 py-4 justify-between shadow-md'>
          <div className='flex flex-col gap-2 font-light text-black text-sm leading-5'>
              <p>Agregar otra direccion</p>
          </div>
          <Link href={'/profile/directions/add'} className='my-auto font-normal text-xs leading-5 underline'>
            Agregar Direccion
          </Link>
        </div>
      </section>
        <Footer/>
    </div>
  )
}
