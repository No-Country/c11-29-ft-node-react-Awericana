import logo from '@/public/assets/logobig.svg'
import Image from 'next/image'

export function Footer () {
  return (
    <footer className="w-screen shadow-up h-[80px] absolute bottom-0 left-0 md:h-[200px] flex items-center justify-around gap-[16px] max-h-[200px] p-normal">
      <Image src={logo} alt='logo' className='flex-1 w-[90px] max-h-[100px] max-w-[200px] md:mr-small'/>
      <p className='text-tiny whitespace-nowrap md:text-big'>LOREM IPSUM</p>
      <p className='text-tiny whitespace-nowrap md:text-big'>LOREM IPSUM</p>
      <p className='text-tiny whitespace-nowrap md:text-big'>LOREM IPSUM</p>
    </footer>
  )
}
