import { Layout } from '@/components/Layout'
import { LoginForm } from '@/components/LoginForm'
import { Primary } from '@/components/Buttons/Primary'

export default function Signin () {
  return (
    <Layout>
      <section className="flex h-screen justify-center">
        <img src='#' alt='' />
        <div className="h-[550px] flex flex-col justify-center items-center">
          <h3 className="mt-10">Iniciar Sesión</h3>
          <div className="flex mb-5">
            <p>¿Aún no tienes cuenta?</p>
            <Primary>
              <a className="text-blue-500">Registrate</a>
            </Primary>
          </div>
          <LoginForm />
        </div>
      </section>
    </Layout>
  )
}
