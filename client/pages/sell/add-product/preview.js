import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useState, useEffect } from 'react'
import { FcLike } from 'react-icons/fc'
import { FiStar } from 'react-icons/fi'
import { Submit } from '@/components/Buttons/Submit'
import { Tertiary } from '@/components/Buttons/Tertiary'
export default function Preview () {
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData')
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData)
      setFormData(parsedFormData)
    }
  }, [])

  return (
    <div>
      <Header />
      <h2 className='mt-14 ml-8 text-4xl'>Vista Previa</h2>
      {formData && (
        <div className='flex  justify-center gap-10 mt-14'>
            <div className='w-[500px]'><img className='  rounded-t rounded-tl-[20px] rounded-tr-[20px]' src={formData.imageUrls[0]} alt='img'/></div>
           <div className=' h-[100%] flex flex-col'>
            <p className='text-5xl'> {formData.price}</p>
            <p className='text-3xl'>{formData.title}</p>
            <p className='text-2xl'>{formData.selectedTalle}</p>
            <p className='mt-5'>Ver tabla de detalles</p>
            <p className='flex items-center mt-2'><FcLike/><p>agregar Favoritos</p></p>
            <p className='text-1xl mt-3'>{formData.detail}</p>
            <p className='flex mt-2'>Vendedor <FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></p>
            <Submit>Comprar</Submit>
            <Tertiary>Agregar Carrito</Tertiary>
            </div>
        </div>
      )}
      <div className='flex justify-center items-center flex-col '>
        <div><Submit>Subir</Submit></div>
        <div><Tertiary>Cancelar</Tertiary></div>
        </div>
      <Footer />
    </div>
  )
}
