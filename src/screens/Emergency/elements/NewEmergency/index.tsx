import React, { FC } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import { SafeAreaView } from 'react-native-safe-area-context'
import Line from '@assets/img/linea.png'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Accept from '@assets/img/accept.png'
import Reject from '@assets/img/reject.png'
import { Button } from 'components'
import { translate } from 'utils'

const NewEmergency: FC = () => {
  const { colors } = useTheme()

  const router: any = useNavigation()

  const info = [
    '♦ Un (1) traslado del fallecido desde el lugar de fallecimiento a la funeraria que prestará el servicio fúnebre',
    '♦ Ataúd Básico',
    '♦ Un (1) traslado a nivel nacional vía terrestre si fuese requerido',
    '♦ Asesoría en los tramites de ley',
    '♦ Preparación y arreglo normal del fallecido',
    '♦ Capilla por 24 horas (en funerarias sugeridas por Rofenirca, C.A)',
    '♦ Suministrar una Corona o Manto de flores si es solicitado',
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
          En caso de cualquier emergencia a la primera persona a quien debe
          contactar es Rofenirca
        </Text>
        <Image style={styles.line} source={Line} />
      </View>
      <ScrollView>
        <View>
          <Text style={[styles.secondaryText, { color: colors.text }]}>
            Plan
          </Text>
          <Text style={[styles.text, { color: colors.text }]}>
            Super Dorado
          </Text>
          <Text style={[styles.secondaryText, { color: colors.text }]}>
            Beneficios
          </Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginVertical: 15 }}>
          {info.map((data, index) => (
            <Text key={index} style={[styles.listText, { color: colors.text }]}>
              {data}
            </Text>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={translate('have_emergency')}
            onPress={() => {
              router.navigate('EmergencyContact')
            }}
            disabled={false}
            style={[styles.formButton, { backgroundColor: colors.error }]}
            styleText={[styles.secondaryText, { color: colors.background }]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewEmergency
