import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native'
import Line from '@assets/img/linea.png'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@providers'
import { styles } from './styles'

const Bill = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const [count, setCount] = useState(1)
  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>◀</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Regresar
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={{ color: colors.text, fontSize: 24 }}>
          Nombre del servicio
        </Text>
        <Text style={{ color: colors.text, fontSize: 15 }}>Consto: $$$</Text>
        <Text style={{ color: colors.text, fontSize: 17 }}>Descripción:</Text>
        <Text style={{ color: colors.text, fontSize: 17 }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
      </View>
      <View style={styles.countContent}>
        <Text style={{ color: colors.text, fontSize: 20 }}>Cantidad</Text>
        <View style={styles.count}>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => setCount(count - 1)}
          >
            <Text style={{ color: colors.text, fontSize: 20 }}>-</Text>
          </TouchableOpacity>
          <Text style={{ color: colors.text, fontSize: 20 }}>{count}</Text>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => setCount(count + 1)}
          >
            <Text style={{ color: colors.text, fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Comentario:"
        style={styles.comment}
        placeholderTextColor={colors.text}
      />
      <View>
        <Text style={[styles.additionalServicesTitle, { color: colors.text }]}>
          Servicios adicionales
        </Text>
        <Image style={styles.line} source={Line} />
        <View style={[styles.additionalServicesCheckbox]}>
          <TouchableOpacity style={styles.countButton} />
          <View>
            <Text style={{ color: colors.text, fontSize: 20 }}>
              Servicio de trasporte
            </Text>
            <Text style={{ color: colors.text, fontSize: 15 }}>Costo: $$$</Text>
          </View>
        </View>
        <View style={[styles.additionalServicesCheckbox]}>
          <TouchableOpacity style={styles.countButton} />
          <View>
            <Text style={{ color: colors.text, fontSize: 20 }}>Corona</Text>
            <Text style={{ color: colors.text, fontSize: 15 }}>Costo: $$$</Text>
          </View>
        </View>
        <Image style={styles.line} source={Line} />
      </View>
      <Text style={{ color: colors.text, fontSize: 25, alignSelf: 'center' }}>
        Monto total: $$$
      </Text>
      <TouchableOpacity
        style={[styles.payButton, { backgroundColor: colors.secundary }]}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={{ color: '#fff', fontSize: 17 }}>Realizar pago</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Bill
