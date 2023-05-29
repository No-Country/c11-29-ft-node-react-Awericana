import Link from 'next/link'

function MyAddressCard ({ address }) {
  return (
    <div className='flex px-6 py-4 mb-2 justify-between items-center shadow-md h-[79px] xl:w-[950px] xl:h-[120px]'>
    <div className='flex flex-col gap-2 xl:gap-4 text-black leading-5'>
        <p className='font-normal text-sm xl:text-xl'>Dirección guardada</p>
        <p className='font-light text-sm xl:text-lg'>{address}</p>
    </div>
    <Link href={'/addresses/modify-address'} className='my-auto font-normal text-xs xl:text-primary xl:text-lg leading-5 underline'>
      Modificar
    </Link>
    </div>
  )
}

export default MyAddressCard
