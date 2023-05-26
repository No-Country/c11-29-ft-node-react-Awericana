import { BsFillCartFill } from 'react-icons/bs'
import { useSession } from '@/hooks/useSession'

export function Cart () {
  const { checkAndRedirect } = useSession()

  const handleClick = () => {
    if (checkAndRedirect()) {
      // Abrir carrito
    }
  }
  return (
    <span onClick={handleClick} className='flex items-center lg:gap-2 justify-between cursor-pointer'>
      <BsFillCartFill className='text-[30px] fill-primary'/>
      <p className='whitespace-nowrap hidden lg:inline-block'>Carrito</p>
    </span>
  )
}
