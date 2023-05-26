import Image from 'next/image'
import card from '@/public/assets/img-category/category.webp'

const Category = ({ name = 'sin nombre' }) => {
  return (
        <div className='inline-block text-center m-6'>
            <Image
                className='rounded-full'
                src={card}
                width={104}
                height={104}
                alt="categoria"
            />
            <h2 className='mt-1'>{name}</h2>
        </div>

  )
}

export default Category
