import React, { FC } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import { SafeAreaView } from 'react-native-safe-area-context'
import { translate } from 'utils'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Accept from '@assets/img/accept.png'
import Reject from '@assets/img/reject.png'

const UserProfile: FC = () => {
  const { colors } = useTheme()

  const router = useNavigation()

  const { user: { profile } } = useSelector((state: any) => state)

  const { width: cwidth, height: cheight } = Image.resolveAssetSource(Accept)
  const { width: owidth, height: oheight } = Image.resolveAssetSource(Reject)
  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.buttonContent}>
        <TouchableOpacity onPress={() => { router.goBack() }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>X</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={profile?.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{profile?.name}</Text>
          <View>
            <Text style={[styles.body, { color: colors.text }]}>{profile?.description}</Text>
          </View>
          <View style={styles.datesContainer}>
            <Text style={[styles.generalText, { color: colors.text }]}>Nacimiento: {profile?.birth}</Text>
            {(profile?.desease) && <Text style={[styles.generalText, { color: colors.text }]}>Deseso: {profile?.desease}</Text>}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={{ width: cwidth / 14, height: cheight / 14 }} source={Accept} />
              <Text style={[styles.generalText, { color: colors.text }]}>{translate('accept')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={{ width: owidth / 14, height: oheight / 14 }} source={Reject} />
              <Text style={[styles.generalText, { color: colors.text }]}>{translate('reject')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile
