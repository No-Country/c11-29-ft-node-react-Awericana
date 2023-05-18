import { Layout } from '@/components/Layout'
import Image from 'next/image'
import Logo from '@/public/assets/logobig.svg'
import { SignupForm } from '@/components/SignupForm'
import Link from 'next/link'

function Signup () {
  return (
    <Layout>
      <header className='m-small'>
          <nav className='block m-auto w-fit'>
            <Link href={'/'}>
              <Image src={Logo} width={240} height={120}/>
            </Link>
          </nav>
      </header>
      <section className='max-w-screen-sm lg:max-w-5xl m-auto flex flex-col h-fit items-center p-8'>
        <h1 className='my-4 text-lg leading-tight sm:text-lg md:text-3xl self-start font-normal'>Registrate</h1>
        <p className='text-xs font-normal self-start md:text-sm mb-5'>Completa los siguientes datos:</p>
        <SignupForm />
      </section>
    </Layout>
  )
}

export default Signup
