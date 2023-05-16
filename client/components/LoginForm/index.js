import { useInputValue } from '@/hooks/useInputValue'
import { Input } from '@/components/Input'
import { useEffect } from 'react'
import { Primary } from '@/components/Buttons/Primary'
import { Secondary } from '../Buttons/Secondary'

export function LoginForm () {
  const { emailValue, emailOnChange, error: emailError, setError: setEmailError } = useInputValue()
  const { passwordValue, passwordOnChange, error: passwordError, setError: setPasswordError } = useInputValue()

  useEffect(() => {
    // Validar email y password
  }, [emailValue, passwordValue])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Enviar a Back
  }

  return (
    <form className="w-[400px]  mt-10 flex flex-col" onSubmit={handleSubmit}>
      <Input placeholder='Email' type={'email'} label={'Ingresa tu e-mail'} value={emailValue} onChange={emailOnChange} error={emailError} />
      <Input placeholder='Contraseña' type={'password'} label={'Ingresa tu contraseña'} value={passwordValue} onChange={passwordOnChange} error={passwordError} />

      <a className="ml-18 underline  mb-5">¿Olvidaste Tu Contraseña?</a>
      <Primary>Iniciar Sesion</Primary>
      <Secondary>Ingresar con Google</Secondary>
      <Secondary>Ingresar con Facebook</Secondary>

    </form>
  )
}
