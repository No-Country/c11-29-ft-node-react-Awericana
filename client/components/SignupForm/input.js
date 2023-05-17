export function Input ({ type = 'text', placeholder, value, onChange, name, error, label }) {
  return (
    <>
      <label className='text-sm font-medium' htmlFor={name}>{label}</label>
      <input className='border border-slate-200 text-gray-700 text-sm outline-none shadow-md p-3 rounded-xl focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400' type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
      {error ? <p>{error}</p> : <p className='font-normal text-sm text-red-500'></p> }
    </>
  )
}
