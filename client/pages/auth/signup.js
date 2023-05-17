import { Layout } from '@/components/Layout'
import Image from 'next/image'
import Logo from '@/public/assets/logoBig.svg'
import SignupForm from '@/components/SignupForm'

function Signup () {
  return (
    <Layout>
      <section className='max-w-5xl mx-auto flex flex-col h-screen items-center p-8'>
        <Image src={Logo} width={240} height={120}/>
        <h1 className='my-8 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl md:ml-16 font-black self-start'> Crea tu cuenta</h1>
        <SignupForm />
      </section>
    </Layout>
  )
}

export default Signup
