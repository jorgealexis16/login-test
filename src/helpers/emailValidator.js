export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email no puede estar vacío."
  if (!re.test(email)) return 'Ooops! Necesitas una dirección de correo valida'
  return ''
}
