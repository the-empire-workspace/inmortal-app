import React, { FC, useState } from 'react'
import { TouchableOpacity, Image, Alert } from 'react-native'
import { useTheme } from '@providers'
import { styles } from './styles'
import {
  grantCameraPermission,
  grantReadSDPermission,
  grantWriteSDPermission,
  ImagePicker,
} from '@utils'
import ImageResizer from 'react-native-image-resizer'
import { Props } from './interface'

const AvatarSelection: FC<Props> = ({ onChange }) => {
  const { colors } = useTheme()

  const [image, setImage] = useState({})

  const getImage = async () => {
    await grantCameraPermission()
    await grantWriteSDPermission()
    await grantReadSDPermission()
    try {
      const newImage: any = await ImagePicker()
      if (!newImage.ok) return
      const { uri } = await ImageResizer.createResizedImage(
        newImage.uri ? newImage.uri : newImage.assets[0].uri,
        300,
        300,
        'JPEG',
        80,
      )
      setImage({ uri, isStatic: true })
      if (onChange) onChange(uri)
    } catch (error) {
      return Alert.alert('Unable to resize the photo')
    }
  }

  return (
    <TouchableOpacity style={[styles.logoContainer, { backgroundColor: colors.secundary }]} onPress={getImage}>
      <Image style={styles.logo} source={image} />
    </TouchableOpacity>
  )
}

export default AvatarSelection
