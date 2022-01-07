import React, { FC, useState } from 'react'
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Plan } from 'components'
import PlansImg from '@assets/img/plans.png'
import { styles } from './styles'
import { useTheme } from '@providers'

const Plans: FC = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const { colors } = useTheme()
  const [plans] = useState([
    {
      name: 'Plan Dorado',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      visible: true,
    },
    {
      name: 'Plan Super Dorado',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      visible: false,
    },
  ])

  return (
    <View>
      <TouchableOpacity
        onPress={() => setToggleModal(true)}
        style={styles.modalButton}
      >
        <Image source={PlansImg} style={{ width: 90, height: 50 }} />
        <Text style={[{ color: colors.primary }]}>Cambio de planes</Text>
      </TouchableOpacity>
      <Modal visible={toggleModal} animationType="slide">
        <ScrollView style={{ backgroundColor: colors.background }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setToggleModal(false)}>
              <Text style={[styles.headerTitle, { color: colors.primary }]}>
                ◀
              </Text>
            </TouchableOpacity>
            <Text style={[styles.headerTitle, { color: colors.primary }]}>
              Planes
            </Text>
          </View>
          {plans.map(e => {
            return <Plan name={e.name} description={e.description} />
          })}
        </ScrollView>
      </Modal>
    </View>
  )
}

export default Plans
