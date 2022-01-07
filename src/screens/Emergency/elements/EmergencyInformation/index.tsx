import React, { FC } from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import { SafeAreaView } from 'react-native-safe-area-context'
import Line from '@assets/img/linea.png'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'components'
import { translate } from 'utils'

const NewEmergency: FC = () => {
  const { colors } = useTheme()

  const router: any = useNavigation()

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.buttonContent}>
        <Text style={[styles.secondaryText, { color: colors.text }]}>
          Emergencia
        </Text>
        <Text style={[styles.title, { color: colors.text }]}>Recaudos</Text>
        <Image style={styles.line} source={Line} />
      </View>
      <ScrollView>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={[styles.label, { color: colors.text }]}>
            Certificado de difusion
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              text="Agregar Certificado"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={[styles.label, { color: colors.text }]}>
            Lugar de difusion
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              text="Coloque su ubicacion en el mapa"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={[styles.label, { color: colors.text }]}>
            Telefonos Alternos
          </Text>
          <View>
            <TextInput
              style={{
                borderStyle: 'solid',
                borderWidth: 2,
                borderColor: colors.text,
                width: '100%',
                marginVertical: 10,
                color: colors.text,
                padding: 10,
              }}
              placeholderTextColor={colors.text}
              placeholder="000-00-00"
            />
            <TextInput
              style={{
                borderStyle: 'solid',
                borderWidth: 2,
                borderColor: colors.text,
                width: '100%',
                marginVertical: 10,
                color: colors.text,
                padding: 10,
              }}
              placeholderTextColor={colors.text}
              placeholder="Opcional"
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={[styles.label, { color: colors.text }]}>
            Motivo del deseso
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              text="Seleccione el motivo de deseso"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={[styles.label, { color: colors.text }]}>
            Validacion de parentesco
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              text="Agregar documento del fallecido"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text="Agregar documento del emisor"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={[styles.label, { color: colors.text }]}>
            Seleccione el tipo de servicio
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              text="Directo"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text="Velacion"
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[styles.formButton, { backgroundColor: colors.secundary }]}
              onPress={() => {}}
              disabled={false}
            />
            <Button
              styleText={[
                styles.secondaryText,
                { color: colors.secundaryText },
              ]}
              style={[
                styles.questionButton,
                { backgroundColor: colors.secundary },
              ]}
              text="?"
              onPress={() => {}}
              disabled={false}
            />
          </View>
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            text={translate('validate_data')}
            onPress={() => {
              router.navigate('EmergencyContact')
            }}
            disabled={false}
            style={[styles.endButton, { backgroundColor: colors.error }]}
            styleText={[styles.secondaryText, { color: colors.background }]}
          />
          <TouchableOpacity
            style={{ marginVertical: 20 }}
            onPress={() => {
              router.navigate('main')
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}
            >
              Cancelar Emergencia
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewEmergency
