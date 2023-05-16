import { Layout } from '@/components/Layout'
import { LoginForm } from '@/components/LoginForm'

export default function Login () {
  return (
    <Layout>
      <section className="flex h-screen justify-center">
        <img src='#' alt='' />
        <div className=" border-green-500 border h-[550px] flex flex-col justify-center items-center">
          <h3 className="mt-10 ¿">Iniciar Sesión</h3>
          <div className="flex  mb-5">
            <p>¿Aún no tienes cuenta?</p>
            <button>
              <a className="text-blue-500">Registrate</a>
            </button>
          </div>
          <LoginForm />
        </div>
      </section>
    </Layout>
  )
}
