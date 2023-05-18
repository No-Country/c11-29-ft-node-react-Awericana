import { Layout } from '@/components/Layout'
import { LoginForm } from '@/components/LoginForm'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/assets/logobig.svg'

export default function Signin () {
  return (
    <Layout>
      <header className='m-small'>
          <nav className='block m-auto w-fit'>
            <Link href={'/'}>
              <Image src={Logo} width={240} height={120}/>
            </Link>
          </nav>
      </header>

      <div className='lg:flex justify-center m-auto lg:p-8'>
        <Image src={'/assets/gato.jpg'} width={450} height={550} alt='Gato' className='hidden lg:inline-block object-right-top mt-extra object-contain' />
        <section className="p-8 lg:p-0 max-w-5xl m-auto lg:m-0 flex-1 h-fit">
          <h1 className='mt-8 my-4 text-lg leading-tight sm:text-lg md:text-3xl md:ml-16 lg:ml-[12%] self-center font-normal'>Inicio Sesion</h1>
          <div className='text-xs font-normal self-start md:ml-16 lg:ml-[12%] md:text-sm mb-5'><p className='inline-block'>¿Aún no tienes cuenta?</p><Link href={'/auth/signup'} className='text-black ml-4 underline cursor-pointer'>Registrate</Link></div>
          <div className='flex justify-center w-full'>
            <LoginForm />
          </div>
        </section>
      </div>
    </Layout>
  )
}
