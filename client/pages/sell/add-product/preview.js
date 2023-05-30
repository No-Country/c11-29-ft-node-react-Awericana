import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useState, useEffect } from 'react'
import { FcLike } from 'react-icons/fc'
import { FiStar } from 'react-icons/fi'
import { Submit } from '@/components/Buttons/Submit'
import { Tertiary } from '@/components/Buttons/Tertiary'
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'

export default function Preview () {
  const [formData, setFormData] = useState(null)
  const { push } = useRouter()
  useEffect(() => {
    const storedFormData = localStorage.getItem('formData')
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData)
      setFormData(parsedFormData)
    } else {
      push('/sell')
    }
  }, [])

  const handleSubmit = () => {

  }

  return (
    <Layout>
      <Header disabled={true} />
      <h2 className='mt-14 ml-8 text-4xl'>Vista Previa</h2>

      {formData
        ? (
        <section className='flex flex-col m-auto max-w-[500px] lg:w-full lg:max-w-none justify-center items-center gap-10 mt-14'>
            <div className='w-[500px]'>
              <img className='rounded-t rounded-tl-[20px] rounded-tr-[20px]' src={formData.imageUrls[0]} alt='img'/>
            </div>
            <div className=' h-[100%] flex flex-col'>
              <p className='text-5xl'> {formData.price}</p>
              <p className='text-3xl'>{formData.title}</p>
              <p className='text-2xl'>{formData.selectedTalle}</p>
              <p className='mt-5'>Ver tabla de detalles</p>
              <p className='flex items-center mt-2'><FcLike/><p>agregar Favoritos</p></p>
              <p className='text-1xl mt-3'>{formData.detail}</p>
              <p className='flex mt-2'>Vendedor <FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></p>
              <span className='max-w-400px block m-auto'>
                <Submit>Comprar</Submit>
                <Tertiary>Agregar Carrito</Tertiary>
              </span>
            </div>
        </section>
          )
        : null}

      <div className='flex justify-center items-center flex-col mt-10 '>
        <div><Submit onClick={handleSubmit}>Subir</Submit></div>
        <div><Tertiary>Cancelar</Tertiary></div>
        </div>
      <Footer />
    </Layout>
  )
}
