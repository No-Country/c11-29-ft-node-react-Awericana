import { useEffect, useState } from 'react'
import { Mobile } from '@/components/Post/Mobile'
import { Desktop } from '@/components/Post/Desktop'


export function Post ({ title, price, imageUrls, detail, selectedTalle, sellerData, id, originalPrice }) {

  const [isBig, setIsBig] = useState(false)

  useEffect(() => {
    if (window && window.innerWidth > 790) setIsBig(true)
    else setIsBig(false)
  }, [])

  if (isBig) {
    return (

    <Desktop {...{ title, price, size: selectedTalle, detail, images: imageUrls, calificacion: sellerData?.calificacion, nombre: sellerData?.nombre, apellido: sellerData?.apellido, id, originalPrice }}/>

    )
  }

  return (
    <Mobile {...{ title, price, size: selectedTalle, detail, images: imageUrls, calificacion: sellerData?.calificacion, nombre: sellerData?.nombre, apellido: sellerData?.apellido, originalPrice }} />
  )
}
