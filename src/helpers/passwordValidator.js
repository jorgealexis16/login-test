export function passwordValidator(password) {
  if (!password) return "La contraseña no puede estar vacía"
  if (password.length < 5) return 'Contraseña debe contener 5 o mas caracteres.'
  return ''
}
