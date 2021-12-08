import { styles } from './styles'

export const loginForm = (color: any /* translate: any */) => [
  {
    element: 'input',
    name: 'email',
    label: null,
    type: 'text',
    defaultValue: '',
    keyboardType: 'default',
    placeholder: 'Correo Electronico',
    returnKeyType: 'go',
    placeholderTextColor: color,
    style: { ...styles.formItem, color: color },
    validations: {
      required: true,
      minLength: 4,
      maxLength: 72,
    },
  },
  {
    element: 'input',
    name: 'password',
    label: null,
    type: 'text',
    style: { ...styles.formItem, color: color },
    defaultValue: '',
    placeholderTextColor: color,
    keyboardType: 'default',
    placeholder: 'Contraseña',
    returnKeyType: 'go',
    validations: {
      required: true,
      minLength: 8,
      maxLength: 72,
    },
  },
]
