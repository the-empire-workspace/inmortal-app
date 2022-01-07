import React, { FC, useState } from 'react'
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Button } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@providers'
import { add } from 'store/invoice/action'
import BillingImg from '@assets/img/billing.png'
import Logo from '@assets/img/logo2.png'
import Name from '@assets/img/name.png'
import Line from '@assets/img/linea.png'
import { styles } from './styles'

const Billing: FC = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const { colors } = useTheme()
  const account = useSelector((state: any) => state.account)
  const dispatch = useDispatch()
  const [invoiceState, setInvoice] = useState({
    id: '###',
    date_creation: '0.0.2022',
    amount: '$$$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    plan: 'Super Dorado',
    planActive: true,
  })
  const addInvoice = () => {
    dispatch(add({ ...invoiceState }))
  }
  const invoice = useSelector((state: any) => state.invoice)

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setToggleModal(true)
          addInvoice
        }}
        style={styles.modalButton}
      >
        <Image source={BillingImg} style={{ width: 50, height: 80 }} />
        <Text style={[{ color: colors.primary }]}>Facturacion</Text>
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
              Facturacion
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
          </View>
          <Text style={[styles.Title, { color: colors.primary }]}>
            Facturas Emitidas
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
          <View style={styles.invoiceItem}>
            <Text style={[styles.invoiceText, { color: colors.primary }]}>
              No. de factura: {invoice.invoice.id}
            </Text>
            <Text style={[styles.invoiceText, { color: colors.primary }]}>
              Fecha emitida: {invoice.invoice.date_creation}
            </Text>
            <Text style={[styles.invoiceText, { color: colors.primary }]}>
              Monto: {invoice.invoice.amount}
            </Text>
            <Text
              style={[styles.invoiceTextDesciption, { color: colors.primary }]}
            >
              {invoice.invoice.description}
            </Text>
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}

export default Billing
