import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Notification from '@assets/img/notification.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const HeaderButton: FC<any> = (props) => {
  const { width, height } = Image.resolveAssetSource(Notification)
  const route: any = useNavigation()

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => { route.navigate('Notification') }}>
        <Image style={{ width: width / 13, height: height / 13 }} source={Notification} />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderButton
