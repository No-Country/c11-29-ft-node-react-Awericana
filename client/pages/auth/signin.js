import { Layout } from '@/components/Layout'
import { LoginForm } from '@/components/LoginForm'
import Header from '@/components/Header'
export default function Signin () {
  return (
    <Layout>
      <Header/>
      <section className="flex h-screen justify-center">
      <div><img src='#' alt='' /></div>
          <LoginForm />
      </section>
    </Layout>
  )
}
