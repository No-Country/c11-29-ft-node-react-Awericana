import { Input } from '@/components/Input'
import { useInputValue } from '@/hooks/useInputValue'
import { useState } from 'react'

export function SignupForm () {
  const { passwordValue, passwordOnChange, error: passwordError } = useInputValue()
  const [dataForm, setDataForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password_confirmation: '',
    fecha_nacimiento: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(dataForm)
  }

  return (
    <form className='flex flex-col gap-4 w-full md:w-9/12' onSubmit={handleSubmit}>
      <Input name={'nombre'} type='text' placeholder={'Nombre(s)*'} label={'Nombre(s)*'} onChange={handleChange}/>
      <Input name={'apellidos'} type='text' placeholder={'Apellido(s)*'} label={'Apellido(s)*'} onChange={handleChange} />
      <Input name={'email'} type='email' placeholder={'Email*'} label={'Email*'} onChange={handleChange}/>
      <Input name={'password'} type={'password'} placeholder={'Contraseña*'} label={'Contraseña*'} value={passwordValue} onChange={passwordOnChange} error={passwordError} />
      <Input name={'password_confirmation'} type={'password'} placeholder={'Repetir contraseña*'} label={'Repetir contraseña*'} value={passwordValue} onChange={passwordOnChange} error={passwordError} />
      <Input name={'fecha_nacimiento'} type={'date'} placeholder={'Fecha de nacimiento*'} label={'Fecha de nacimiento*'} onChange={handleChange} />
      <button type='submit' className='my-6 self-end py-3 px-6 bg-secondary shadow-lg rounded-xl text-white font-md text-lg hover:scale-105 hover:bg-primary transition'>
        Registrarse
      </button>
    </form>
  )
}
