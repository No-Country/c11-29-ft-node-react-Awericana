import logosmall from '@/public/assets/logosmall.svg'
import Image from 'next/image'

export function Small ({ ...props }) {
  return <Image alt='Small logo' src={logosmall} {...props}/>
}
