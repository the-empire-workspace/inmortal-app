import React, { FC, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Switch,
  Image,
} from 'react-native'
import { useTheme } from '@providers'
import { useSelector, useDispatch } from 'react-redux'
import Soon from '@assets/img/sol.png'
import Moon from '@assets/img/luna.png'
import { logout } from 'store/account/action'
import { styles } from './styles'

const MenuDrawer: FC = () => {
  const { colors } = useTheme()
  const [toggleModal, setToggleModal] = useState(false)
  const [switchTheme, setSwitchTheme] = useState(false)
  const account = useSelector((state: any) => state.account)
  const [form] = useState([account, false])
  const dispatch = useDispatch()
  const logoutFun = () => dispatch(logout({ ...form[0] }))
  return (
    <View>
      <TouchableOpacity onPress={() => setToggleModal(true)}>
        <Text style={[styles.openModal, { color: colors.primary }]}>
          &#9776;
        </Text>
      </TouchableOpacity>
      <Modal transparent visible={toggleModal}>
        <View style={styles.root}>
          <View style={styles.modalContainer}>

              style={{
                color: colors.primary,
                alignSelf: 'flex-end',
                fontSize: 25,
              }}
              onPress={() => setToggleModal(false)}
            >
              x
            </Text>
            <TouchableOpacity
              onPress={() => setSwitchTheme(!switchTheme)}
              style={styles.switchContainer}
            >
              <Image style={[{ width: 40, height: 40 }]} source={Soon} />
              <Switch
                value={switchTheme}
                onValueChange={() => setSwitchTheme(!switchTheme)}
                trackColor={{ true: colors.primary }}
              />
              <Image style={[{ width: 19, height: 30 }]} source={Moon} />
            </TouchableOpacity>
            <Text style={[styles.linksMenu, { color: colors.primary }]}>
              Idioma
            </Text>
            <Text style={[styles.linksMenu, { color: colors.primary }]}>
              Contactanos
            </Text>
            <Text style={[styles.linksMenu, { color: colors.primary }]}>
              Sitio web
            </Text>
            <Text style={[styles.linksMenu, { color: colors.primary }]}>
              Tips
            </Text>
            <Text style={[styles.linksMenu, { color: colors.primary }]}>
              Cancelar plan
            </Text>
            <Text
              onPress={logoutFun}
              style={[styles.linksMenu, { color: colors.primary }]}
            >
              Cerrar Secion
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default MenuDrawer
