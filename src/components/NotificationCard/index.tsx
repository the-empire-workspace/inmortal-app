import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import Accept from '@assets/img/accept.png'
import Reject from '@assets/img/reject.png'
import { Props } from './interface'
import { translate } from '@utils'
import Alfredo from '@assets/testimg/alfredo.jpeg'
import Pepe from '@assets/testimg/pepe.jpg'
import { useDispatch } from 'react-redux'
import { setProfile } from 'store/actions'
import { useNavigation } from '@react-navigation/native'

const NotificationCard: FC<Props> = ({ title, description, addorReject, image }) => {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const router: any = useNavigation()

  const { width: cwidth, height: cheight } = Image.resolveAssetSource(Accept)
  const { width: owidth, height: oheight } = Image.resolveAssetSource(Reject)

  const data = [
    {
      name: 'Alfredo Guevara',
      image: Alfredo,
      description: 'El intérprete, que se hizo famoso encarnando al personaje de Stanford Blatch, un amigo íntimo de la protagonista de la serie',
      birth: '07-03-1967',
      desease: '10-06-2019'
    },
    {
      name: 'Pepe Suarez',
      image: Pepe,
      description: 'Pepe Suarez, luchador increible',
      birth: '09-03-1974',
    }
  ]

  const goProfile = () => {
    const profile = data.find((data: any) => data.name === title)
    if (profile) {
      dispatch(setProfile(profile))
      router.navigate('UserProfile')
    }
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity style={{ padding: 10 }} onPress={goProfile}>
        <Image style={styles.logo} source={image} />
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start', flex: 1 }}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {
          addorReject ? (
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
          ) : (
            <View style={styles.buttonContainer}>
              <Text>{description || ''}</Text>
            </View>
          )
        }
      </View>
    </View>
  )
}

export default NotificationCard
