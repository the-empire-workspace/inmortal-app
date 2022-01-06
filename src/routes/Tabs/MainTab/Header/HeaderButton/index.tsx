import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Notification from '@assets/img/notification.png'
import { styles } from './styles'

const HeaderButton: FC<any> = () => {
  const { width, height } = Image.resolveAssetSource(Notification)
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Image style={{ width: width / 13, height: height / 13 }} source={Notification} />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderButton
