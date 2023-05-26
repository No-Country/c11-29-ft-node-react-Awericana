import { loginUser } from '@/lib/loginUser'
import { registerUser } from '@/lib/registerUser'
import { logoutUser } from '@/lib/logoutUser'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from '@/hooks/useSession'

export function useAuth () {
  const { push } = useRouter()
  const { setSession } = useSession()
  const [error, setError] = useState(null)

  async function register (data) {
    const response = await registerUser(data)
    if (response?.error) {
      setError(response.error)
      return false
    }
    return response
  }

  async function login (data) {
    const response = await loginUser(data)
    if (response?.error) {
      setError(response.error)
      return false
    }
    return response
  }

  async function logout () {
    const response = await logoutUser()
    if (response?.error) {
      setError(response.error)
      return false
    }
    setSession(null)
    push('/auth/signin')
    return true
  }

  return { login, register, error, logout }
}
