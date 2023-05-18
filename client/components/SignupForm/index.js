import { Input } from '@/components/Input'
import { Submit } from '../Buttons/Submit'
import { useFormFields } from '@/hooks/useFormFields'
import { Form } from '../Form'
import { useState } from 'react'
import { useValidator } from '@/hooks/useValidator'

export function SignupForm () {
  const { isPasswordValid, isEmailValid } = useValidator()
  const initialError = {
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    password_confirmation: false,
    fecha_nacimiento: false
  }
  const [error, setError] = useState(initialError)

  const { data, handleChange } = useFormFields({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password_confirmation: '',
    fecha_nacimiento: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(initialError)

    const validPassword = isPasswordValid(data.password)
    const validConfirmation = data.password_confirmation && data.password === data.password_confirmation
    const validNombre = Boolean(data.nombre) && data.nombre.length > 3
    const validApellido = Boolean(data.apellido) && data.apellido.length > 3
    const validEmail = isEmailValid(data.email)
    const validNacimiento = Boolean(data.fecha_nacimiento)

    if (!validPassword) {
      setError(prev => ({ ...prev, password: 'La contraseña es inválida' }))
    }

    if (!validEmail) {
      setError(prev => ({ ...prev, email: 'El email es inválido' }))
    }

    if (!validConfirmation) {
      setError(prev => ({ ...prev, password_confirmation: 'Las contraseñas no coinciden' }))
    }

    if (!validNombre) {
      setError(prev => ({ ...prev, nombre: 'El nombre es muy corto' }))
    }

    if (!validApellido) {
      setError(prev => ({ ...prev, apellido: 'El apellido es muy corto' }))
    }

    if (!validNacimiento) {
      setError(prev => ({ ...prev, fecha_nacimiento: 'Por favor, introduzca fecha de nacimiento' }))
    }

    if (validPassword && validEmail && validConfirmation && validNombre && validApellido && validNacimiento) {
      console.log(data)
      // fetch...
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Input error={error.nombre} name={'nombre'} type='text' placeholder={'Nombre(s)*'} label={'Nombre(s)*'} onChange={handleChange}/>
        <Input error={error.apellido} name={'apellido'} type='text' placeholder={'Apellido(s)*'} label={'Apellido(s)*'} onChange={handleChange} />
        <Input error={error.email} name={'email'} type='email' placeholder={'Email*'} label={'Email*'} onChange={handleChange}/>
        <Input error={error.password} name={'password'} type={'password'} placeholder={'Contraseña*'} label={'Contraseña*'} onChange={handleChange} />
        <Input error={error.password_confirmation} name={'password_confirmation'} type={'password'} placeholder={'Repetir contraseña*'} label={'Repetir contraseña*'} onChange={handleChange} />
        <Input error={error.fecha_nacimiento} name={'fecha_nacimiento'} type={'date'} placeholder={'Fecha de nacimiento*'} label={'Fecha de nacimiento*'} onChange={handleChange} />
      </div>
      <Submit center={true}>REGISTRARSE</Submit>
    </Form>
  )
}
