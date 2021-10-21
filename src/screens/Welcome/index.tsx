import React, { FC } from 'react'
import { Text, View, Image } from 'react-native'
/* import { translate } from '@utils' */
import { useTheme } from '@providers'
import { styles } from './styles'
import Logo from '@assets/img/logo.png'
import Line from '@assets/img/linea.png'

const Welcome: FC = () => {

  const { colors } = useTheme()

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={styles.logoContent}>
          <Image style={styles.logo} source={Logo} />
          <Image style={styles.line} source={Line} />
          <Text style={[styles.subtitle, { color: colors.text }]}>Siempre Presente</Text>
        </View>
        <Text style={[styles.subtitle, { color: colors.text }]}>Powered By Rofenirca</Text>
      </View>
    </View>
  )
}

export default Welcome
