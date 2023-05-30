import React from 'react'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Submit } from '../../components/Buttons/Submit'
import { Footer } from '@/components/Footer'
import { Form } from '@/components/Form'
import { Secondary } from '@/components/Buttons/Secondary'

export default function add () {
  return (
    <div>
    <Header/>
    <section className='flex flex-col justify-center items-center'>
    <h1 className='py-12 px-4 font-normal text-lg leading-5'>Agregar Dirección</h1>
    <Form>
      <div className='flex flex-col gap-6'>
      <Input name={'Calle'} type='text' placeholder={'Calle*'} label={'Calle*'} />
        <div className='flex gap-4 justify-between items-center w-full'>
        <div className='w-1/2'>
          <Input name={'Numero'} type='text' placeholder={'Numero*'} label={'Numero*'} />
        </div>
        <div className='w-1/2'>
        <Input name={'C.Postal'} type='email' placeholder={'C.Postal*'} label={'C.Postal*'} />
        </div>
        </div>
        <Input name={'Ciudad'} type={'text'} placeholder={'Ciudad*'} label={'Ciudad*'} />
        <Input name={'Provincia'} type={'text'} placeholder={'Provincia*'} label={'Provincia*'} />
        <Input name={'Pais'} type={'text'} placeholder={'Pais*'} label={'Pais*'}/>
      </div>
        <Submit center={true}>Agregar</Submit>
        <Secondary>Cancelar</Secondary>
    </Form>
    </section>
<Footer/>
    </div>
  )
}
