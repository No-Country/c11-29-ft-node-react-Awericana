import { Input } from '../SignupForm/input'
import { useInputValue } from '@/hooks/useInputValue'

export default function SignupForm () {
  const { passwordValue, passwordOnChange, error: passwordError } = useInputValue()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='flex flex-col gap-4 w-full md:w-9/12'>
      <Input type='text' placeholder={'Ingresa tu nombre'} label={'Nombre:'} />
      <Input type='email' placeholder={'Ingresa tu email'} label={'Email:'}/>
      <Input placeholder='Ingresa tu contraseña' type={'password'} label={'Contraseña:'} value={passwordValue} onChange={passwordOnChange} error={passwordError} />
      <button onSubmit={handleSubmit} className='my-7 self-end py-3 px-6 bg-emerald-500 shadow-lg rounded-xl text-white font-md text-lg hover:scale-105 hover:bg-emerald-400 transition'>
        Registrarse
      </button>
    </form>
  )
}
