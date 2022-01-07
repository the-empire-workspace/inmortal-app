import React, { FC } from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './styles'
import AppNavigator from '@routes'

const Main: FC = () => {
  return (
    <View style={[styles.root]}>
      <AppNavigator />
    </View>
  )
}

export default Main
