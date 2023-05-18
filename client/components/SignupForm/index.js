import { Input } from '@/components/Input'
import { useInputValue } from '@/hooks/useInputValue'

export function SignupForm () {
  const { passwordValue, passwordOnChange, error: passwordError } = useInputValue()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='flex flex-col gap-4 w-full md:w-9/12'>
      <Input type='text' placeholder={'Nombre y apellido*'} label={'Nombre y apellido*'} />
      <Input type='email' placeholder={'Email*'} label={'Email*'}/>
      <Input type='email' placeholder={'Repetir email*'} label={'Repetir email*'}/>
      <Input type={'password'} placeholder={'Contraseña*'} label={'Contraseña*'} value={passwordValue} onChange={passwordOnChange} error={passwordError} />
      <Input type={'password'} placeholder={'Repetir contraseña*'} label={'Repetir contraseña*'} value={passwordValue} onChange={passwordOnChange} error={passwordError} />
      <button onSubmit={handleSubmit} className='my-6 self-end py-3 px-6 bg-secondary shadow-lg rounded-xl text-white font-md text-lg hover:scale-105 hover:bg-primary transition'>
        Registrarse
      </button>
    </form>
  )
}
