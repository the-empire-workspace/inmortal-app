import React, { FC } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import Alfredo from '@assets/testimg/alfredo.jpeg'
import Pepe from '@assets/testimg/pepe.jpg'
import { NotificationCard } from 'components'
import { SafeAreaView } from 'react-native-safe-area-context'
import Line from '@assets/img/linea.png'
import { translate } from 'utils'
import { useNavigation } from '@react-navigation/native'

const Notification: FC = () => {
  const { colors } = useTheme()
  const router = useNavigation()
  const data = [
    {
      title: 'Alfredo Guevara',
      image: Alfredo,
      addorReject: true,
    },
    {
      title: 'Pepe Suarez',
      image: Pepe,
      addorReject: true,
    },
  ]
  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.goBack()}>
          <Text style={[styles.title, { color: colors.text }]}>X</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>
          {translate('notifications')}
        </Text>
        <Image style={styles.line} source={Line} />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <NotificationCard {...item} />}
        style={styles.root}
      />
    </SafeAreaView>
  )
}

export default Notification
