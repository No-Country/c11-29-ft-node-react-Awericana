import React from 'react'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Submit } from '../../../components/Buttons/Submit'
import { Footer } from '@/components/Footer'

export default function add () {
  return (
    <div>
    <Header/>
    <section className='flex flex-col justify-center items-center'>
    <p className='mt-[70px] mb-[50px] font-medium text-3xl'>Modificar Direccion</p>
    <form className='flex flex-col justify-center items-center'>
      <div className='ml-4 mr-4 mt-5 flex flex-col gap-3'>
        <Input name={'Calle'} type='text' placeholder={'Calle*'} label={'Calle*'} />
        <div className='flex gap-5 justify-center items-center w-full'>
        <Input name={'Numero'} type='text' placeholder={'Numero*'} label={'Numero*'} />
        <Input name={'C.Postal'} type='email' placeholder={'C.Postal*'} label={'C.Postal*'} />
        </div>
        <Input name={'Ciudad'} type={'text'} placeholder={'Ciudad*'} label={'Ciudad*'} />
        <Input name={'Provincia'} type={'text'} placeholder={'Provincia*'} label={'Provincia*'} />
        <Input name={'Pais'} type={'text'} placeholder={'Pais*'} label={'Pais*'}/>
      </div>
        <Submit>Guardar Cambios</Submit>
        <button className='w-[390px] border my-0.5  h-12  border-solid  text-gray-700 text-sm font-regular leading-tight text-black outline-none shadow-md p-3 rounded-xl border-primary focus:outline-none focus:ring-1 focus:ring-primary-400 focus:ring-opacity-50 placeholder:text-sm border-green-400`'>Cancelar</button>
    </form>
    </section>
        <Footer/>
    </div>
  )
}
