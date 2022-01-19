import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useTheme } from '@providers'
import { styles } from './styles'

const Plan = (props: any) => {
  const [visible, setVisible] = useState(false)
  const { colors } = useTheme()
  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.planButton}
      >
        <Text style={{ color: colors.primary, fontSize: 18 }}>
          {props.nameButton}
        </Text>
      </TouchableOpacity>
      {visible && (
        <View
          style={[
            styles.descriptionContent,
            { backgroundColor: colors.background },
          ]}
        >
          <Text style={[styles.description, { color: colors.text }]}>
            {props.details}
          </Text>
          <TouchableOpacity style={styles.suscribeButton}>
            <Text style={{ color: '#fff', fontSize: 17 }}>
              Anexe comprobante de tranferencia aqui
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Plan
