import { Search } from '@/components/Search'
import { Small } from '@/components/Logo/Small'
import { BsFillCartFill } from 'react-icons/bs'
import { Big } from '../Logo/Big'
import Link from 'next/link'
import { UserOptions } from '@/components/UserOptions'

export function Header () {
  return (
    <header className='flex w-screen justify-around items-center h-[96px] p-layoutSides gap-2 z-10 shadow-down '>
        <Small className='min-w-[20px] max-w-[48px] lg:hidden' />
        <Big className='w-[150px] hidden lg:inline-block' />
        <Search />
        <section className='flex items-center justify-around gap-2 md:gap-8'>
          <UserOptions />
          <Link href={'/'} className='flex items-center lg:gap-2 justify-between'>
            <BsFillCartFill className='text-[30px] fill-primary'/>
            <p className='whitespace-nowrap hidden lg:inline-block'>Carrito</p>
          </Link>
      </section>
    </header>
  )
}
