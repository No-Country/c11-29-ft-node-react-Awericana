import { useInputValue } from '@/hooks/useInputValue'
import { useEffect } from 'react'
import { Secondary } from '@/components/Buttons/Secondary'
import { Input } from '@/components/Input'
import { Form } from '@/components/Form'

export function LoginForm () {
  const { emailValue, emailOnChange, error: emailError } = useInputValue()
  const { passwordValue, passwordOnChange, error: passwordError } = useInputValue()

  useEffect(() => {
    // Validar email y password
  }, [emailValue, passwordValue])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Enviar a Back
  }

  return (
    <Form onSubmit={handleSubmit}>
       <h3 className='text-3xl text-center mt-10 mb-10 md:text-5xl'>Inicio Sesion</h3>
          <Input placeholder='Email' type={'email'} label={'Ingresa tu e-mail'} value={emailValue} onChange={emailOnChange} />
          <Input placeholder='Contraseña' type={'password'} label={'Ingresa tu contraseña'} value={passwordValue} onChange={passwordOnChange} />
              <button className='m-10 bg-green-700 py-4  rounded-lg px-6  hover:bg-green-500 text-white ' value="summit">Iniciar Sesion</button>
              <a className="ml-18 underline text-center cursor-pointer  text-green-500  mb-5">¿Olvidaste Tu Contraseña?</a>
              <div className='flex justify-center'><p>No tenes Cuenta?</p><a className='text-blue-600 underline cursor-pointer'>Registrate</a></div>
     <Secondary>Ingresar con Google</Secondary>
     <Secondary>Ingresar con Facebook</Secondary>
    </Form>
  )
}
