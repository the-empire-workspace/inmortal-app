import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'

import Condolence01 from '@assets/img/condolence-01.png'
import Flower from '@assets/img/flower.png'
import Share from '@assets/img/share.png'
import Comment from '@assets/img/comment.png'
import { Props } from './interface'

const SocialCard: FC<Props> = ({ name, description, desease, birth, image, comments }) => {
  const { colors } = useTheme()

  const { width: cwidth, height: cheight } = Image.resolveAssetSource(Condolence01)
  const { width: owidth, height: oheight } = Image.resolveAssetSource(Comment)
  const { width: fwidth, height: fheight } = Image.resolveAssetSource(Flower)
  const { width: swidth, height: sheight } = Image.resolveAssetSource(Share)

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: colors.text }]}>{name}</Text>
        <View>
          <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.body, { color: colors.text }]}>{description}</Text>
        </View>
        <View style={styles.datesContainer}>
          <Text style={[styles.generalText, { color: colors.text }]}>Nacimiento: {birth}</Text>
          <Text style={[styles.generalText, { color: colors.text }]}>Deseso: {desease}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image style={{ width: cwidth / 14, height: cheight / 14 }} source={Condolence01} />
            <Text style={[styles.generalText, { color: colors.text }]}>3.5 K</Text>
          </TouchableOpacity>
          {(comments) && (
            <TouchableOpacity style={styles.buttonStyle}>
              <Image style={{ width: owidth / 14, height: oheight / 14 }} source={Comment} />
              <Text style={[styles.generalText, { color: colors.text }]}>{comments}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.buttonStyle}>
            <Image style={{ width: fwidth / 14, height: fheight / 14 }} source={Flower} />
            <Text style={[styles.generalText, { color: colors.text }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image style={{ width: swidth / 15, height: sheight / 15 }} source={Share} />
            <Text style={[styles.generalText, { color: colors.text }]}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SocialCard
