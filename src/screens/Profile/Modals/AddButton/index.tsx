import React from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { useState } from 'react'
import { useTheme } from '@providers'
import { styles } from './styles'

const AddButton = () => {
  const { colors } = useTheme()
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <View>
      <TouchableOpacity onPress={() => setToggleModal(true)}>
        <Text style={[styles.openModal, { color: colors.primary }]}>+</Text>
      </TouchableOpacity>
      <Modal transparent visible={toggleModal}>
        <View style={styles.root}>
          <View style={styles.modalContainer}>
            <Text style={[styles.modalText, { color: colors.primary }]}>
              Ingrese el correo de la persona que desea agregar
            </Text>
            <TextInput placeholder="Correo" style={styles.modalTextInput} />
            <View style={styles.modalButton}>
              <TouchableOpacity onPress={() => setToggleModal(false)}>
                <Text style={{ color: colors.primary }}>Calcelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setToggleModal(false)}
                style={styles.addButton}
              >
                <Text style={{ color: 'white' }}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddButton
