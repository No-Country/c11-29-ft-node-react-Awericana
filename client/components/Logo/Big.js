import logo from '@/public/assets/logobig.svg'
import Image from 'next/image'

export function Big ({ ...props }) {
  return <Image alt='Big logo' src={logo} {...props}/>
}
