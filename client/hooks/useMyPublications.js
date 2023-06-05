import { useContext } from 'react'
import { MyPublicationsContext } from '@/context/MyPublicationsProvider'

export function useMyPublications () {
  const { publications, dispatch, ACTION_TYPES } = useContext(MyPublicationsContext)

  return { publications, dispatch, ACTION_TYPES }
}
