import React, { FC } from 'react'
import { Image, View } from 'react-native'
import Inmortal from '@assets/img/inmortal.png'

const HeaderTitle: FC<any> = () => {
  const { width, height } = Image.resolveAssetSource(Inmortal)

  return (
    <View>
      <Image
        style={{ width: width / 3.5, height: height / 3.5 }}
        source={Inmortal}
      />
    </View>
  )
}

export default HeaderTitle
