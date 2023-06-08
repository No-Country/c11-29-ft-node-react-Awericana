import { Stars } from './Stars'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import { Submit } from '@/components/Buttons/Submit'
import { Tertiary } from '@/components/Buttons/Tertiary'

export function Desktop ({ toggleFav, buttons = false, images, title, isFav, price, size, detail, calificacion, nombre, apellido, originalPrice }) {
  const [imageList, setImageList] = useState(images)
  const [shown, setShown] = useState(0)

  return (
      <article className="p-layoutSides gap-10 mb-10 mt-10 flex w-full justify-center">
        <figure className='h-fit max-w-[800px] aspect-video'>
          {imageList.map((src, i) => {
            if (i === shown) {
              return (
              <Image key={src + i} src={src} className='h-full object-contain w-full block rounded-tr-3xl rounded-tl-3xl' alt='Product image' width={100} height={100}/>
              )
            }
            return null
          })}
          <span className='flex gap-6 justify-around'>
            {
              imageList.map((src, i) => {
                if (i !== shown && i < 5) {
                  return (
                  <Image key={src + i} src={src} className='w-[140px] object-contain h-[140px] inline-block mt-4 cursor-pointer' alt='Product image' onClick={() => setShown(i)} width={100} height={100}/>
                  )
                } else if (i === 6) {
                  return (
                    <span onClick={() => setImageList(prev => prev.reverse())} key={i} className='w-[140px] h-[140px] bg-grayish inline-block mt-4 cursor-pointer text-white text-6xl text-center pt-10'>+{imageList.length - 6}</span>
                  )
                }
                return null
              })
            }
          </span>
        </figure>
        <div className="flex flex-col max-w-1/2 mt-5 gap-10">
            <div className='flex flex-col justify-between h-[150px]'>
              {
                 originalPrice !== price
                   ? <div className='flex gap-4'>
                <p className='text-5xl font-extrabold leading-5 text-black line-through'>${originalPrice}</p>
                 <p className='text-5xl font-extrabold leading-5 text-red'>${price}</p>
                </div>
                   : <p className='text-5xl font-extrabold leading-5 text-black'>${originalPrice}</p>
              }
              <p className="text-3xl font-bold">{title}</p>
              <p className="text-2xl">{size.nombre}</p>
            </div>
            <span className='flex gap-2 p-0 text-left h-fit items-center'>
              {
                isFav
                  ? <>
                  <AiFillHeart className='fill-primary' size={20} />
                  <p onClick={toggleFav} className='w-2/4 cursor-pointer inline-block text-primary whitespace-nowrap font-normal text-normal underline'>Quitar de favoritos</p>
                </>
                  : <>
                  <AiOutlineHeart className='fill-primary' size={20}/>
                  <p onClick={toggleFav} className='w-2/4 cursor-pointer inline-block text-primary whitespace-nowrap font-normal text-normal underline'>Agregar a favoritos</p>
                </>
              }
            </span>
          <div className='mt-4'>
              <p className="text-xl mb-4 font-normal">{detail}</p>
              <div className='flex gap-10 mt-10 font-thin'>
                <p className="text-xl">{`${nombre} ${apellido}`}</p>
                <Stars rating={calificacion} />
              </div>
            </div>
            {
              buttons
                ? <div className='flex flex-col justify-center items-center w-fit'>
            <Submit center={true}>COMPRAR</Submit>
            <Tertiary>Agregar al carrito</Tertiary>
        </div>
                : null
            }

        </div>
      </article>
  )
}
