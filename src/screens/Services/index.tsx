import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Bonfire from '@assets/img/crematorio.png'
import Flower from '@assets/img/flor.png'
import Funeral from '@assets/img/funeraria.png'
import Boat from '@assets/img/traslado.png'
import Line from '@assets/img/linea.png'
import { styles } from './styles'
import { useTheme } from 'providers'
import { useNavigation } from '@react-navigation/native'

const Services = () => {
  const { colors } = useTheme()
  const navigation: any = useNavigation()
  const scroll = [0, 1, 2, 3, 4]
  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <Text style={[styles.Title, { color: colors.text }]}>Servicios</Text>
      <View style={styles.servicesContent}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Commerce', { title: 'Cremar' })}
        >
          <Image source={Bonfire} style={{ height: 105, width: 65 }} />
          <Text style={[styles.serviceTitle, { color: colors.text }]}>
            Cremar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Commerce', { title: 'Floristeria' })
          }
        >
          <Image source={Flower} style={{ height: 115, width: 65 }} />
          <Text style={[styles.serviceTitle, { color: colors.text }]}>
            Floristeria
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.servicesContent}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Commerce', { title: 'Funerario' })
          }
        >
          <Image source={Funeral} style={{ height: 70, width: 109 }} />
          <Text style={[styles.serviceTitle, { color: colors.text }]}>
            Funerario
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Commerce', { title: 'Traslado' })}
        >
          <Image source={Boat} style={{ height: 64, width: 100 }} />
          <Text style={[styles.serviceTitle, { color: colors.text }]}>
            Traslado
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={Line}
        style={{
          width: '90%',
          height: 6,
          resizeMode: 'stretch',
          alignSelf: 'center',
        }}
      />
      <View style={styles.sliderContent}>
        <Text style={[styles.sliderTitle, { color: colors.text }]}>
          Descuentos
        </Text>
        <ScrollView horizontal>
          {scroll.map((e, i) => {
            return <TouchableOpacity key={i} style={styles.sliderItem} />
          })}
        </ScrollView>
      </View>
      <View style={styles.sliderContent}>
        <Text style={[styles.sliderTitle, { color: colors.text }]}>
          Promociones
        </Text>
        <ScrollView horizontal>
          {scroll.map((e, i) => {
            return <TouchableOpacity key={i} style={styles.sliderItem} />
          })}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Services
