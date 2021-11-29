import React,{FC,useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { translate } from '@utils'
import { Button, DynamicForm } from 'components'
import { loginForm } from './form'
import { useTheme } from '@providers'
import Logo from '@assets/img/logo.png'
import { styles } from './styles'

const Login: FC = () => {
  const {colors}=useTheme()
  const [form,setForm]=useState([{},false])
  const navigation:any=useNavigation()
  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.logoContent}>
        <Image style={styles.logo}  source={Logo} />
      </View>
      <View style={styles.formContent}>
        <Text style={styles.formTitle}>Inicio de sesion</Text>
        <DynamicForm
            formData={loginForm(colors.primary, translate)}
            returnData={(data: any) => {
              setForm(data)
            }}
          />
      </View>
      <View style={styles.buttonContent}>
        <Button
          text='Ingresar'
          onPress={()=>console.log('hola')}
          disabled={false}
          style={styles.formButton}
        />
        <View style={styles.links}>
          <Button
            text='Olvide mi contraseña'
            onPress={()=>console.log('hola')}
            disabled={false}
            style={[{color:'#fff'}]}
          />
          <Button
            text={translate('create_account')}
            onPress={()=>navigation.navigate("Register")}
            disabled={false}
            style={[{color:'#fff'}]}
          />
        </View>

      </View>
    </View>
  )
}

export default Login
