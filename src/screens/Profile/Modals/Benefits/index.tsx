import React, { FC, useState } from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import BenefitsImg from '@assets/img/benefits.png'
import Logo from '@assets/img/logo2.png'
import Name from '@assets/img/name.png'
import Line from '@assets/img/linea.png'
import { useTheme } from '@providers'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const Benefits: FC = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const { colors } = useTheme()
  const account = useSelector((state: any) => state.account)
  const invoice = useSelector((state: any) => state.invoice)

  return (
    <View>
      <TouchableOpacity
        onPress={() => setToggleModal(true)}
        style={styles.modalButton}
      >
        <Image source={BenefitsImg} style={{ width: 87, height: 45 }} />
        <Text style={[{ color: colors.primary }]}>Beneficios</Text>
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
              Beneficios
            </Text>
          </View>
          <View style={styles.imagesContent}>
            <Image source={Logo} style={{ width: 60, height: 60 }} />
            <Image
              source={Name}
              style={{
                width: 124,
                height: 27,
                resizeMode: 'contain',
                marginLeft: 10,
              }}
            />
          </View>
          <View style={styles.userDetails}>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              Nombre del cliente: {account.user.name} {account.user.last_name}
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              No. de contrato: {'###'}
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              Plan: {invoice.invoice.plan}{' '}
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              Estatus del plan:{' '}
              {invoice.invoice.planActive ? 'Activo' : 'Ausente'}
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              Fecha de emicion: {invoice.invoice.date_creation}
            </Text>
          </View>
          <Text style={[styles.Title, { color: colors.primary }]}>
            Beneficios
          </Text>
          <Image
            source={Line}
            style={{
              width: '90%',
              height: 6,
              resizeMode: 'stretch',
              alignSelf: 'center',
            }}
          />
          <View style={styles.Info}>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              ⧫ Un (1) traslado del fallecido desde el lugar de fallecimiento a
              la funeraria qur prestará el servicio fúnebre
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              ⧫ Ataúd Básico
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              ⧫ Un (1) traslado a nivel nacional vía terrestre si fuese
              requerido
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              ⧫ Asesoría en los tramites de ley
            </Text>
            <Text style={[styles.userInfo, { color: colors.primary }]}>
              ⧫ Preparacion y arreglo normal del fallecido
            </Text>
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}

export default Benefits
