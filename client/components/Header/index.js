import Search from '../Search/Search'
import Image from 'next/image'
import { HiUser } from 'react-icons/hi2'
import { BsFillCartFill } from 'react-icons/bs'
import logo from '@/public/assets/logobig.svg'

export default function Header () {
  return (
    <header className='flex w-screen  justify-around items-center h-[96px] shadow-lg  '>
        <Image className=' md:w-[200px] md:h-[68px] w-[239px] h-[32px]' alt='logo' src={logo}/>
        <Search/>
        <section className='flex items-center'>
            <div className='mr-8 flex items-center'><HiUser className='mr-2'/><p>Mi Perfil</p></div>
            <div className='flex items-center'><BsFillCartFill className='mr-2'/><p>Carrito</p></div>
      </section>
    </header>
  )
}
