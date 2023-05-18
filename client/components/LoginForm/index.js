import { Input } from '@/components/Input'
import { Form } from '@/components/Form'
import { useFormFields } from '@/hooks/useFormFields'
import { Submit } from '../Buttons/Submit'
import Link from 'next/link'
import { Secondary } from '@/components/Buttons/Secondary'
import { useState } from 'react'
import { useValidator } from '@/hooks/useValidator'

export function LoginForm () {
  const { isPasswordValid, isEmailValid } = useValidator()

  const initialError = {
    email: false,
    password: false
  }
  const { data, handleChange } = useFormFields({
    email: '',
    password: ''
  })
  const [error, setError] = useState(initialError)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(initialError)

    const validPassword = isPasswordValid(data.password)
    const validEmail = isEmailValid(data.email)

    if (!validPassword) {
      setError(prev => ({ ...prev, password: 'La contraseña es inválida' }))
    }

    if (!validEmail) {
      setError(prev => ({ ...prev, email: 'El email es inválido' }))
    }

    if (validPassword && validEmail) {
      console.log(data)
      // fetch...
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Input name='email' error={error.email} placeholder='Ingresa tu e-mail' type={'text'} label={'Ingresa tu e-mail'} onChange={handleChange} />
        <Input name='password' error={error.password} placeholder='Ingresa tu contraseña' type={'password'} label={'Ingresa tu contraseña'} onChange={handleChange} />
        <Link href={'#'} className="ml-18 underline cursor-pointer text-black">¿Olvidaste Tu Contraseña?</Link>
        <Submit center={true} >INICIAR SESIÓN</Submit>
        <footer className='flex flex-col w-full md:w-9/12 m-auto'>
          <Secondary>Ingresar con Google</Secondary>
          <Secondary>Ingresar con Facebook</Secondary>
        </footer>
    </Form>
  )
}
