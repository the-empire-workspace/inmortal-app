import React, { FC, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { DynamicForm, Button } from 'components'
import { useTheme } from '@providers'
import Logo from '@assets/img/logo.png'
import { styles } from './styles'
import { registerForm } from './form'
import { translate } from 'utils'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
import { signup } from 'store/account/action'

const Register: FC = () => {
  const { colors } = useTheme()
  const [form, setForm] = useState([{}, false])
  const navigator: any = useNavigation()
  const dispatch = useDispatch()
  const register = () => dispatch(signup({ ...form[0] }))
  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <ScrollView>
        <View style={styles.logoContent}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formTitle}>Crear cuenta</Text>
          <DynamicForm
            formData={registerForm(colors.primary, translate)}
            returnData={(data: any) => {
              setForm(data)
            }}
          />
          <View style={styles.buttonContent}>
            <Button
              text={translate('create_account')}
              onPress={register}
              disabled={false}
              style={styles.formButton}
            />
            <Button
              text={translate('back')}
              onPress={() => navigator.navigate('Login')}
              disabled={false}
              style={[{ color: '#fff' }]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Register
