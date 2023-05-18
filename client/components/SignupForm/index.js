import { Input } from '@/components/Input'
import { Submit } from '../Buttons/Submit'
import { useFormFields } from '@/hooks/useFormFields'
import { Form } from '../Form'

export function SignupForm () {
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
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Input name={'nombre'} type='text' placeholder={'Nombre(s)*'} label={'Nombre(s)*'} onChange={handleChange}/>
        <Input name={'apellido'} type='text' placeholder={'Apellido(s)*'} label={'Apellido(s)*'} onChange={handleChange} />
        <Input name={'email'} type='email' placeholder={'Email*'} label={'Email*'} onChange={handleChange}/>
        <Input name={'password'} type={'password'} placeholder={'Contraseña*'} label={'Contraseña*'} onChange={handleChange} />
        <Input name={'password_confirmation'} type={'password'} placeholder={'Repetir contraseña*'} label={'Repetir contraseña*'} onChange={handleChange} />
        <Input name={'fecha_nacimiento'} type={'date'} placeholder={'Fecha de nacimiento*'} label={'Fecha de nacimiento*'} onChange={handleChange} />
      </div>
      <Submit center={true}>REGISTRARSE</Submit>
    </Form>
  )
}
