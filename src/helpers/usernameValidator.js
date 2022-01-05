export function usernameValidator(username) {
    const re = /@\S/
    if (!username) return "username no puede estar vacío."
    if (!re.test(username)) return 'Ooops! Necesitas un nombre de usuario valido'
    return ''
  }