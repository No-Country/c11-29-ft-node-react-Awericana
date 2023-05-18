import { useInputValue } from '@/hooks/useInputValue'
import { useEffect } from 'react'
import { Secondary } from '@/components/Buttons/Secondary'

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
    <>
    <form className="w-[380px]  mt-2 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
    <h3 className='text-3xl text-center mt-10 mb-10'>Inicio Sesion</h3>
     <div><input className='border-green-400 border rounded-lg w-[339px] py-[8px] pl-4 mb-6' placeholder='Email' type={'email'} label={'Ingresa tu e-mail'} value={emailValue} onChange={emailOnChange} /></div>
     <div><input className='border-green-400 border rounded-lg w-[339px] py-[8px] pl-4' placeholder='Contraseña' type={'password'} label={'Ingresa tu contraseña'} value={passwordValue} onChange={passwordOnChange} /></div>
      <button className='m-10 bg-green-700 py-4  rounded-lg px-6  text-current' value="summit">Iniciar Sesion</button>
      <a className="ml-18 underline   mb-5">¿Olvidaste Tu Contraseña?</a>
     <div><Secondary>Ingresar con Google</Secondary></div>
     <div><Secondary>Ingresar con Facebook</Secondary></div>
    </form>
    </>
  )
}
