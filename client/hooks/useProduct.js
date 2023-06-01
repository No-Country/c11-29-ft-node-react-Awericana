import { useSession } from './useSession'

export function useProduct () {
  const { session } = useSession()

  const createPost = ({ detail, imageUrls, price, selectedCategoria, selectedGender, selectedSubCategoria, selectedTalle, title }) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/publicaciones`

    const data = {
      usuarioId: session.id,
      titulo: title,
      descripcion: detail,
      precio: price,
      talleId: selectedTalle.id,
      personaId: selectedGender.id,
      productoId: selectedSubCategoria.id,
      imagenes: imageUrls
    }

    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
  }

  return { createPost, sellerData: session }
}
