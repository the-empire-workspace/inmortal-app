import { Button } from 'components'
import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { translate } from 'utils'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'store/account/action'
import { styles } from './styles'
import { useTheme } from '@providers'

const Social: FC = () => {
  const { colors } = useTheme()
  const account = useSelector((state: any) => state.account)
  const [ form ] = useState([account, false])
  const dispatch = useDispatch()
  const logoutFun = () => dispatch(logout({ ...form[0] }))

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Text>Social</Text>
      <Button
        text={translate('logout')}
        onPress={logoutFun}
        disabled={false}
        style={styles.formButton}
      />
    </View>
  )
}

export default Social
