import { useSession } from './useSession'

export function useProduct () {
  const { session } = useSession()

  const getAllPosts = (id) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/usuario/${id}/publicaciones`

    return fetch(URL, { credentials: 'include' })
  }

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
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
  }

  return { sellerData: session, createPost, getAllPosts }
}
