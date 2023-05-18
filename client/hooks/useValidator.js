export function useValidator () {
  const isPasswordValid = (password) => {
    // Minimo ocho caracteres, una letra, un numero y un caracter especial:
    const check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return password && check.test(password)
  }

  const isEmailValid = (email) => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return email && check.test(email)
  }

  return { isPasswordValid, isEmailValid }
}
