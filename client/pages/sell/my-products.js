import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { HiTrash } from 'react-icons/hi'

function myProducts () {
  return (
    <Layout>
      <Head>
        <title>Mis productos</title>
      </Head>
      <Header/>
      <section className='max-w-screen-sm lg:max-w-5xl m-auto h-fit flex flex-col'>
      <h1 className='py-12 px-4 font-normal text-lg leading-5 xl:text-3xl xl:leading-loose'>Mis productos</h1>
      <div className='flex px-5 py-4 mb-2 justify-stretch items-center gap-4 xl:gap-8 shadow-[1px_1px_4px_rgba(0,0,0,0.25)] h-[112px] xl:h-[160px] xl:py-6'>
        <img className='h-[80px] w-[80px] xl:h-[112px] xl:w-[112px] bg-gray-700'/>
        <div className='flex flex-col self-stretch justify-between font-light text-sm leading-5 max-[480px]:w-3/5 min-[480px]:w-2/3 min-[540px]:w-3/4 min-[768px]:w-4/5'>
          <div className='text-base font-light leading-5 text-black xl:text-2xl'>Título</div>
          <div className='text-base font-light leading-5 text-black xl:text-2xl'>Precio</div>
          <div className='flex justify-around'>
            <Link className='text-xs font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline' href={'#'}>Editar publicación</Link>
            <Link className='text-xs font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline' href={'#'}>Agregar descuento</Link>
          </div>
        </div>
        <Link href={'#'}>
          <HiTrash className='text-[22px] xl:text-[40px] mr-7' />
        </Link>
      </div>
      <div className='flex px-5 py-4 mb-2 justify-stretch items-center gap-4 xl:gap-8 shadow-[1px_1px_4px_rgba(0,0,0,0.25)] h-[112px] xl:h-[160px] xl:py-6'>
        <img className='h-[80px] w-[80px] xl:h-[112px] xl:w-[112px] bg-gray-700'/>
        <div className='flex flex-col self-stretch justify-between font-light text-sm leading-5 max-[480px]:w-3/5 min-[480px]:w-2/3 min-[540px]:w-3/4 min-[768px]:w-4/5'>
          <p className='text-base font-light leading-5 text-black xl:text-2xl'>Título</p>
          <p className='text-base font-light leading-5 text-black xl:text-2xl'>Precio</p>
          <div className='flex justify-around'>
            <Link className='text-xs font-normal leading-5 text-black xl:text-primary underline xl:text-lg xl:no-underline xl:hover:underline' href={'#'}>Editar publicación</Link>
            <Link className='text-xs font-normal leading-5 text-black xl:text-primary underline xl:text-lg xl:no-underline xl:hover:underline' href={'#'}>Agregar descuento</Link>
          </div>
        </div>
        <Link href={'#'}>
          <HiTrash className='text-[22px] xl:text-[40px] mr-7' />
        </Link>
      </div>
      </section>
    </Layout>
  )
}

export default myProducts
