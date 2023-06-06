import Image from 'next/image'
const Category = ({ name = 'sin nombre', img }) => {
  return (
        <div className='inline-block text-center m-6'>
            <Image
                className='rounded-full'
                src={img}
                width={104}
                height={104}
                alt="categoria"
            />
            <h2 className='mt-1'>{name}</h2>
        </div>

  )
}

export default Category
