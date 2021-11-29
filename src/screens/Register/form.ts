import { styles } from './styles'

export const registerForm = (color: any, translate: any) => [
  {
    element: 'input',
    name: 'name',
    label: null,
    type: 'text',
    defaultValue: '',
    keyboardType: 'default',
    placeholder: 'Nombre',
    returnKeyType: 'go',
    placeholderTextColor: color,
    style: { ...styles.formItem, color: color },
    validations: {
      required: true,
      minLength: 3,
      maxLength: 72,
    },
  },
  {
    element: 'input',
    name: 'last_name',
    label: null,
    type: 'text',
    style: { ...styles.formItem, color: color },
    defaultValue: '',
    placeholderTextColor: color,
    keyboardType: 'default',
    placeholder: 'Apellido',
    returnKeyType: 'go',
    validations: {
      required: true,
      minLength: 3,
      maxLength: 72,
    },
  },
  /* {
    element: 'date',
    name: 'date_birth',
    type: 'date',
    style: { ...styles.formItem, color: color },
    placeholder: "Fecha de nacimiento",
  }, */
  {
    element: 'input',
    name: 'email',
    label: null,
    type: 'text',
    style: { ...styles.formItem, color: color },
    defaultValue: '',
    placeholderTextColor: color,
    keyboardType: 'default',
    placeholder: 'Correo Electronico',
    returnKeyType: 'go',
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
  {
    element: 'input',
    name: 'email_contact',
    label: null,
    type: 'text',
    style: { ...styles.formItem, color: color },
    defaultValue: '',
    placeholderTextColor: color,
    keyboardType: 'default',
    placeholder: 'Correo de referencia (Opcional)',
    returnKeyType: 'go',
    validations: {
      required: false,
      minLength: 8,
      maxLength: 72,
    },
  },
  {
    element: 'select',
    name: 'religion',
    type: 'select',
    style: { ...styles.formItem, color: color },
    placeholderTextColor: '#fff',
    placeholder: 'Religión (Opcional)',
    values:[
      {
        label:'Judaísmo',
        value:'JUD',
      },
      {
        label:'Cristianismo',
        value:'CRI',
      },
      {
        label:'Islamismo',
        value:'ISL',
      },
      {
        label:'Budaismo',
        value:'BUD',
      },
      {
        label:'Hinduismo',
        value:'HIN'
      }
    ],
    validations: {
      required: false,
    },
  },
]