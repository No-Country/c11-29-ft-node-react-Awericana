import { FaSearch } from 'react-icons/fa'

export function Search () {
  return (
    <nav className="flex-1 mx-small max-w-[768px]">
      <div className="relative">
        <input
          className="border w-full text-black md:h-[50px] min-w-[150px] h-[38px] text-sm outline-none shadow-md p-3 rounded-xl focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400 border-primary pr-0"
          type="search"
          placeholder="Buscar"
        />
        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
          <FaSearch className='fill-primary'/>
        </span>
      </div>
    </nav>
  )
}
