import React, { FC } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import { SafeAreaView } from 'react-native-safe-area-context'
import Line from '@assets/img/linea.png'
import { useNavigation } from '@react-navigation/native'

const Emergency: FC = () => {
  const { colors } = useTheme()

  const router: any = useNavigation()

  const info = [
    {
      name: 'Pepe Mujica',
      vinculation: 'Titular',
    },
    {
      name: 'Jose Mujica',
      vinculation: 'Hijo',
    },
    {
      name: 'Antonio Mujica',
      vinculation: 'Hijo/a',
    },
    {
      name: 'Maria Mujica',
      vinculation: 'Hijo/a',
    },
  ]

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.buttonContent}>
        <TouchableOpacity
          onPress={() => {
            router.goBack()
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}
          >
            X
          </Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.error }]}>
          Quien Tiene La Emergencia?
        </Text>
        <Image style={styles.line} source={Line} />
      </View>
      <FlatList
        data={info}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              { padding: 10, marginVertical: 5, elevation: 5 },
              { backgroundColor: colors.secundary },
            ]}
            onPress={() => {
              router.navigate('EmergencyInformation')
            }}
          >
            <Text style={[styles.listText, { color: colors.text }]}>
              {item.name}
            </Text>
            <Text style={[styles.secondaryText, { color: colors.text }]}>
              Tipo de Vinculo: {item.vinculation}
            </Text>
          </TouchableOpacity>
        )}
        style={styles.root}
      />
    </SafeAreaView>
  )
}

export default Emergency
