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
            <div className='m-3'>
                <Image
                    className='rounded-lg'
                    src={imgSrc}
                    width={297}
                    height={154}
                    alt="producto"
                />
            </div>
            <div className='mx-3'>
                <p>${precio}</p>
                <p>{titulo}</p>
                <p>{talleMedidas}</p>
            </div>
        </div>
  )
}

export default Card
