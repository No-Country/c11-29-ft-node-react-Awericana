import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export function Input ({ type = 'text', placeholder, value, onChange, name, error, label }) {
  const [isShown, setIsShown] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  return (
    <>
      {showLabel ? <label className='text-sm font-medium' htmlFor={name}>{label}</label> : ''}
      <input type={isShown ? 'text' : type} onFocus={() => setShowLabel(true)} onBlur={() => setShowLabel(false)} placeholder={placeholder} value={value} onChange={onChange} name={name} className='border border-slate-200 text-gray-700 text-sm outline-none shadow-md p-3 rounded-xl focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400' />
      {type === 'password'
        ? (isShown ? <AiFillEyeInvisible onClick={() => setIsShown(!isShown)} /> : <AiFillEye onClick={() => setIsShown(!isShown)} />)
        : null
      }
      {error ? <p className='font-normal text-sm text-red-500'>{error}</p> : ''}
    </>
  )
}
