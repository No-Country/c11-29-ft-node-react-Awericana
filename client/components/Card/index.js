import Image from 'next/image'
import card from '@/public/assets/img-card/card.png'

const Card = ({
  precio = 'No especificado',
  titulo = 'No especificado',
  talleMedidas = 'No especificado',
  imgSrc = card
}) => {
  return (
        <div className='inline-flex flex-col'>
            <div className='my-3'>
                <Image
                    className='rounded-lg aspect-video'
                    src={imgSrc}
                    width={297}
                    height={154}
                    alt="producto"
                />
            </div>
            <div className='ml-0'>
                <p className='font-bold text-3xl'>${precio}</p>
                <p className='font-normal text-2xl'>{titulo}</p>
                <p className='font-normal text-xl'>{talleMedidas}</p>
            </div>
        </div>
  )
}

export default Card
