import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export function Input ({ type = 'text', placeholder, value, onChange, name, error, label }) {
  const [isShown, setIsShown] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  return (
    <>
      {showLabel ? <label htmlFor={name}>{label}</label> : ''}
      <input type={isShown ? 'text' : type} onFocus={() => setShowLabel(true)} onBlur={() => setShowLabel(false)} placeholder={placeholder} value={value} onChange={onChange} name={name} className='' />
      {type === 'password'
        ? (isShown ? <AiFillEyeInvisible onClick={() => setIsShown(!isShown)} /> : <AiFillEye onClick={() => setIsShown(!isShown)} />)
        : null
      }
      {error ? <p>{error}</p> : ''}
    </>
  )
}
