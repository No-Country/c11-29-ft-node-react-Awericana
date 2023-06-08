import { useEffect, useState } from 'react'
import { useProduct } from './useProduct'

export function useFav (initialState, userId, id) {
  const [isFav, setIsFav] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const { toggleFav } = useProduct()

  useEffect(() => {
    if (isLoading) {
      toggleFav(userId, id)
        .then(res => res.ok ? res.json() : res)
        .then(res => {
          setIsLoading(false)
          setIsFav(!isFav)
          console.log(res?.message)
        })
        .catch(e => {
          setIsLoading(false)
          console.error(e)
        })
    }
    setIsLoading(false)
  }, [isLoading])

  const toggle = () => {
    setIsLoading(true)
  }
  return { isFav, toggle }
}
