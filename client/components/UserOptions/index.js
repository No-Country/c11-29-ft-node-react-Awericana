import { HiUser } from 'react-icons/hi2'
import { useState } from 'react'
import { Settings } from './Settings'

export function UserOptions () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)} className='flex items-center lg:gap-2 justify-between cursor-pointer'>
        <HiUser className='text-[30px] fill-primary' />
        <p className='whitespace-nowrap hidden lg:inline-block'>Mi Perfil</p>
      </span>
      {isOpen ? <Settings /> : null}
    </>
  )
}
