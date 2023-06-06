import { useProduct } from '@/hooks/useProduct'
import { useSession } from '@/hooks/useSession'
import { createContext, useReducer, useEffect } from 'react'

export const MyPublicationsContext = createContext([])

const ACTION_TYPES = {
  PUPULATE: 'POPULATE'
}

function reducer (state = null, action) {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.PUPULATE:
      return payload || []
    default:
      return state
  }
}

export function MyPublicationsProvider ({ children }) {
  const [publications, dispatch] = useReducer(reducer, null)
  const { session } = useSession()
  const { getAllPosts } = useProduct()

  useEffect(() => {
    if (session?.id && !publications) {
      getAllPosts(session.id)
        .then(res => res.json())
        .then(res => {
          dispatch({ type: ACTION_TYPES.PUPULATE, payload: res })
        })
        .catch((e) => {
          console.error(e)
          dispatch({ type: ACTION_TYPES.PUPULATE, payload: [] })
        })
    }
  }, [session])

  return (
    <MyPublicationsContext.Provider value={{ publications, dispatch, ACTION_TYPES }}>
      {children}
    </MyPublicationsContext.Provider>
  )
}
