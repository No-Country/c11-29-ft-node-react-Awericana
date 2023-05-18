import { Input } from '@/components/Input'
import { Form } from '@/components/Form'
import { useFormFields } from '@/hooks/useFormFields'
import { Submit } from '../Buttons/Submit'
import Link from 'next/link'
import { Secondary } from '@/components/Buttons/Secondary'

export function LoginForm () {
  const { data, handleChange } = useFormFields({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Input name='email' placeholder='Ingresa tu e-mail' type={'email'} label={'Ingresa tu e-mail'} onChange={handleChange} />
        <Input name='password' placeholder='Ingresa tu contraseña' type={'password'} label={'Ingresa tu contraseña'} onChange={handleChange} />
        <Link href={'#'} className="ml-18 underline cursor-pointer text-black">¿Olvidaste Tu Contraseña?</Link>
        <Submit center={true} >INICIAR SESIÓN</Submit>
        <footer className='flex flex-col w-full md:w-9/12 m-auto'>
          <Secondary>Ingresar con Google</Secondary>
          <Secondary>Ingresar con Facebook</Secondary>
        </footer>
    </Form>
  )
}
