import React, { FC, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { translate } from '@utils'
import { Button, DynamicForm } from 'components'
import { loginForm } from './form'
import { useTheme } from '@providers'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '@assets/img/logo.png'
import { styles } from './styles'
import { signin } from 'store/account/action'

const Login: FC = () => {
  const { colors } = useTheme()
  const [form, setForm] = useState([{}, false])

  const navigation: any = useNavigation()
  const dispatch = useDispatch()
  const account = useSelector((state: any) => state.account)

  const loginFun = () => dispatch(signin({ ...form[0] }))

  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.logoContent}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.formContent}>
        <Text style={styles.formTitle}>{translate('login')}</Text>
        <DynamicForm
          formData={loginForm(colors.primary, translate)}
          returnData={(data: any) => {
            setForm(data)
          }}
        />
      </View>
      <View style={styles.buttonContent}>
        <Button
          text={translate('login')}
          onPress={() =>
            Validator(form[0], account) ? loginFun() : console.log('err')
          }
          disabled={false}
          style={{ ...styles.formButton, backgroundColor: colors.secundary }}
        />
        <View style={styles.links}>
          <Button
            text={translate('recover_password')}
            onPress={() => console.log('hola')}
            disabled={false}
            styleText={{ color: colors.text }}
          />
          <Button
            text={translate('create_account')}
            onPress={() => navigation.navigate('Register')}
            disabled={false}
            styleText={{ color: colors.text }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const Validator = (form: any, account: any) => {
  if (
    form.email[0] === account.user.user.email[0] &&
    form.password[0] === account.user.user.password[0]
  )
    return true
  else return false
}

export default Login
