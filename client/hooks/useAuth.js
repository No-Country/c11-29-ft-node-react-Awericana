import { loginUser } from '@/lib/loginUser'
import { registerUser } from '@/lib/registerUser'
import { useState } from 'react'

export function useAuth () {
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

  return { login, register, error }
}
