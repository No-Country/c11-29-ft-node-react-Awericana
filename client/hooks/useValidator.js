export function useValidator () {
  const isPasswordValid = (password) => {
    const check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return password && check.test(password)
  }

  const isEmailValid = (email) => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return email && check.test(email)
  }

  const validateField = (key, data) => {
    switch (key) {
      case 'password':
        return isPasswordValid(data[key]) ? null : 'Debe tener 8 caracteres, una mayuscula, un numero y un caracter especial'
      case 'email':
        return isEmailValid(data[key]) ? null : 'El email es inválido'
      case 'passwordConfirmation':
        return data[key] && data?.password === data[key] ? null : 'Las contraseñas no coinciden'
      case 'nombre':
        return Boolean(data[key]) && data[key].length > 3 ? null : 'El nombre es muy corto'
      case 'apellido':
        return Boolean(data[key]) && data[key].length > 3 ? null : 'El apellido es muy corto'
      case 'fechaNacimiento':
        return data[key].length ? null : 'La fecha de nacimiento es inválida'
    }
  }

  const validator = (data) => {
    const error = {}
    Object.keys(data).forEach((key) => {
      const errorMessage = validateField(key, data)
      if (errorMessage) error[key] = errorMessage
    })
    return Object.keys(error).length ? error : null
  }

  return validator
}
