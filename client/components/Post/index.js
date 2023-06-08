import { useEffect, useState } from 'react'
import { Mobile } from '@/components/Post/Mobile'
import { Desktop } from '@/components/Post/Desktop'
import { Submit } from '../Buttons/Submit'
import { Tertiary } from '../Buttons/Tertiary'
import { useFav } from '@/hooks/useFav'


export function Post ({ userId, id, initialFav, buttons, title, price, imageUrls, detail, selectedTalle, sellerData, originalPrice, ownProduct }) {
  const [isBig, setIsBig] = useState(false)
  const { isFav, toggle } = useFav(initialFav, userId, id)

  useEffect(() => {
    if (window && window.innerWidth > 799) setIsBig(true)
    else setIsBig(false)
  }, [])

  if (isBig) {
    return (
    <section className='relative'>
     <Desktop toggleFav={() => toggle()} ownProduct={ownProduct} isFav={isFav} buttons={buttons} {...{ title, price, size: selectedTalle, detail, images: imageUrls, calificacion: sellerData?.calificacion, nombre: sellerData?.nombre, apellido: sellerData?.apellido, originalPrice }}/>
    {!ownProduct && <div className='flex flex-col w-fit items-center absolute bottom-0 right-0 lg:right-56'>
        <Submit>COMPRAR</Submit>
        <Tertiary>Agregar al carrito</Tertiary>
      </div>}
    </section>
    )
  }

  return (
    <Mobile toggleFav={() => toggle()} isFav={isFav} ownProduct={ownProduct} {...{ title, price, size: selectedTalle, detail, images: imageUrls, calificacion: sellerData?.calificacion, nombre: sellerData?.nombre, apellido: sellerData?.apellido, originalPrice }} />
  )
}
