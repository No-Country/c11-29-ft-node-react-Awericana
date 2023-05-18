import { Input } from '@/components/Input'
import { Form } from '@/components/Form'
import { useFormFields } from '@/hooks/useFormFields'
import { Submit } from '../Buttons/Submit'
import Link from 'next/link'
import { Secondary } from '@/components/Buttons/Secondary'
import { useState } from 'react'

export function LoginForm () {
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
    setError(initialError)
    if (!data.email) {
      setError(prev => ({ ...prev, email: 'El email es inválido' }))
    } else if (!data.password) {
      setError(prev => ({ ...prev, password: 'La contraseña es inválida' }))
    } else {
    }

    e.preventDefault()
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Input name='email' placeholder='Ingresa tu e-mail' type={'email'} label={'Ingresa tu e-mail'} onChange={handleChange} />
        <Input name='password' placeholder='Ingresa tu contraseña' type={'password'} label={'Ingresa tu contraseña'} onChange={handleChange} />
        <Link href={'#'} className="ml-18 underline cursor-pointer text-black">¿Olvidaste Tu Contraseña?</Link>
        <Submit disabled={Boolean(error.email || error.password)} center={true} >INICIAR SESIÓN</Submit>
        <footer className='flex flex-col w-full md:w-9/12 m-auto'>
          <Secondary>Ingresar con Google</Secondary>
          <Secondary>Ingresar con Facebook</Secondary>
        </footer>
    </Form>
  )
}
