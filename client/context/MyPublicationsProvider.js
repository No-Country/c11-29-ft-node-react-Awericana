import { useProduct } from '@/hooks/useProduct'
import { useSession } from '@/hooks/useSession'
import { createContext, useEffect, useReducer } from 'react'

export const MyPublicationsContext = createContext({})

const ACTION_TYPES = {
  PUPULATE: 'POPULATE'
}

function reducer (state, action) {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.PUPULATE:
      return payload
    default:
      return state
  }
}

export function MyPublicationsProvider ({ children }) {
  const { session } = useSession()
  const { getAllPosts } = useProduct()
  const { publications, dispatch } = useReducer(reducer, {})

  useEffect(() => {
    if (session?.id) {
      getAllPosts(session.id)
        .then(res => {
          if (res.ok) {
            res.json()
          }
        })
        .then(res => {
          console.log(res)
          // dispatch({ type: ACTION_TYPES.PUPULATE, payload: res })
        })
        .catch(console.error)
    }
  }, [])

  return (
    <MyPublicationsContext.Provider value={{ publications, dispatch, ACTION_TYPES }}>
      {children}
    </MyPublicationsContext.Provider>
  )
}
