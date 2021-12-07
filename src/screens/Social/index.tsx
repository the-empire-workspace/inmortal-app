import { Button } from 'components'
import React,{FC,useState} from 'react'
import { View, Text } from 'react-native'
import { translate } from 'utils'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from 'store/account/action'
import {styles} from './styles'
import { useTheme } from '@providers'

const Social:FC = () => {
  const {colors}=useTheme()
  const account = useSelector(state=>state.account)
  console.log(account)
  const [form,setForm]=useState([account,false])
  const dispatch = useDispatch()
  const logoutFun =() => dispatch(logout({ ...form[0]}))

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Text>hola</Text>
      <Button 
        text={translate('create_account')}
        onPress={logoutFun}
        disabled={false}
        style={styles.formButton}
      /> 
    </View>
  )
}

export default Social
