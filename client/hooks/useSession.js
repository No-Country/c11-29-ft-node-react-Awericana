import { useContext, useEffect } from 'react'
import { SessionContext } from '@/context/SessionProvider'
import { useRouter } from 'next/router'

export function useSession (initialState) {
  const [session, setSession] = useContext(SessionContext)
  const { push } = useRouter()

  useEffect(() => {
    if (!session && !initialState) {
      fetch('/api/session')
        .then(res => res.json())
        .then(res => {
          if (!res?.error) {
            setSession(res)
          }
        })
        .catch(e => console.error(e))
    } else setSession(prev => prev ? prev : initialState)
  }, [])

  function checkAndRedirect () {
    if (!session) {
      push('/auth/signin')
      return false
    }

    return true
  }

  return { session, setSession, checkAndRedirect }
}
