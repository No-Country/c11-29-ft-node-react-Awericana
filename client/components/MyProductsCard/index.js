import Link from 'next/link'
import { HiTrash } from 'react-icons/hi'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Select } from '@/components/Input/Select'

function MyProductsCard ({ title, price, imgUrl, id, handleDelete, discount = '0%', applyDiscount }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(discount || 0)
  const [isLoading, setIsLoading] = useState(false)
  const DISCOUNT_OPTIONS = Array.from({ length: 20 }).map((_, i) => i !== 0 ? i * 5 : 0)

  const close = () => setIsOpen(false)
  const handleSelect = (e) => setSelected(e.target.value)

  useEffect(() => {
    if (isLoading) {
      console.log(selected)
      const discountNumber = +selected.replace('%', '')

      if (!isNaN(discountNumber)) {
        applyDiscount(id, selected)
          .then(res => {
            if (res.ok) return res.json()
            else throw new Error({ error: 'Something went wrong.' })
          })
          .then(res => {
            console.log(res)
            setIsLoading(false)
          })
          .catch(e => {
            setIsLoading(false)
            console.error(e)
          })
      }
    }

    setIsLoading(false)
  }, [isLoading])

  return (
    <div className='bg-white'>
      <div className='flex px-5 py-4 mb-2 justify-stretch items-center gap-4 xl:gap-8 shadow-[1px_1px_4px_rgba(0,0,0,0.25)] h-[112px] xl:h-[160px] xl:py-6'>
        <Image width={100} alt='Product image' height={100} className='h-[80px] w-[80px] xl:h-[112px] xl:w-[112px] bg-gray-700' src={imgUrl}/>
        <div className='flex flex-col self-stretch justify-between font-light text-sm leading-5 max-[480px]:w-3/5 min-[480px]:w-2/3 min-[540px]:w-3/4 min-[768px]:w-4/5'>
          <div className='text-base font-light leading-5 text-black xl:text-2xl'>{title}</div>
          <div className='text-base font-light leading-5 text-black xl:text-2xl'>${price}</div>
          <div className='flex justify-around'>
            <Link className='text-xs font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline' href={'#'}>Editar publicación</Link>
            <p onClick={() => setIsOpen(!isOpen)} className='text-xs cursor-pointer font-normal leading-5 text-black underline xl:text-primary xl:text-lg xl:no-underline xl:hover:underline'>{discount !== '0%' ? 'Modificar descuento' : 'Agregar descuento'}</p>
          </div>
        </div>
        <HiTrash onClick={() => handleDelete(id)} className='text-[22px] cursor-pointer xl:text-[40px] mr-7' />

      </div>
        {isOpen
          ? (
            <div className='block max-w-[500px]'>
              <Select onChange={handleSelect} defaultValue={`${discount}%`} buttons={true} label={'Selecciona el porcentaje de descuento'} close={close}>
                {DISCOUNT_OPTIONS.map(num => {
                  return <option key={num} value={num === 0 ? 0 : `${num}%`}>{num === 0 ? 'Sin descuento' : `${num}%`}</option>
                })}
              </Select>
              <span className='flex justify-around mt-2 bg-white w-full'>
                <button onClick={() => setIsLoading(true)} className='border-none outline-none underline'>Aceptar</button>
                <button onClick={() => close()} className='border-none outline-none underline'>Cancelar</button>
              </span>
              </div>
            )
          : ''}
    </div>
  )
}

export default MyProductsCard
