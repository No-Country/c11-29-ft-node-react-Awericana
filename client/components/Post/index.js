import { useEffect, useState } from 'react'
import { Mobile } from '@/components/Post/Mobile'
import { Desktop } from '@/components/Post/Desktop'
import { Submit } from '../Buttons/Submit'
import { Tertiary } from '../Buttons/Tertiary'
import { useFav } from '@/hooks/useFav'
import { useRouter } from 'next/router'

export function Post ({ userId, id, initialFav, buttons, title, price, imageUrls, detail, selectedTalle, sellerData, originalPrice, ownProduct }) {
  const [isBig, setIsBig] = useState(false)
  const { isFav, toggle } = useFav(initialFav, userId, id)
  const router = useRouter()

  const addToCart = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/carrito/${userId}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ publicacionId: id })
    })
      .then(response => {
        console.log('Producto agregado al carrito:', response)
        alert('Producto agregado')
      })
      .catch(error => {
        console.error('Error al agregar el producto al carrito:', error)
      })
  }

  const handlePurchase = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/carrito/${userId}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ publicacionId: id })
    })
      .then(response => {
        router.push('/cart')
      })
      .catch(error => {
        console.error('Error al agregar el producto al carrito:', error)
      })
  }

  useEffect(() => {
    if (window && window.innerWidth > 799) setIsBig(true)
    else setIsBig(false)
  }, [])

  if (isBig) {
    return (
    <section className='relative'>
     <Desktop toggleFav={() => toggle()} ownProduct={ownProduct} isFav={isFav} buttons={buttons} {...{ title, price, size: selectedTalle, detail, images: imageUrls, calificacion: sellerData?.calificacion, nombre: sellerData?.nombre, apellido: sellerData?.apellido, originalPrice, userId, id }}/>
    {!ownProduct && buttons && <div className='flex flex-col w-fit items-center absolute bottom-0 right-0 lg:right-56'>
      </div>}
    </section>
    )
  }

  return (
    <section className='mb-24'>
      <Mobile toggleFav={() => toggle()} isFav={isFav} ownProduct={ownProduct} {...{ title, price, size: selectedTalle, detail, images: imageUrls, calificacion: sellerData?.calificacion, nombre: sellerData?.nombre, apellido: sellerData?.apellido, originalPrice, userId, id }} />
      {!ownProduct && buttons && <div className='flex flex-col w-full items-center justify-center absolute '>
        <Submit center={true} onClick={handlePurchase}>COMPRAR</Submit>
        <Tertiary center={true} onClick={addToCart}>Agregar al carrito</Tertiary>
      </div>}
    </section>
  )
}
