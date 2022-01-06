import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import JavierAristu from '@assets/testimg/javieraristu.jpeg'
import Pilar from '@assets/testimg/pilar.jpeg'
import Carmen from '@assets/testimg/carmen.jpeg'
import { SocialCard } from 'components'

const Social: FC = () => {
  const { colors } = useTheme()

  const data = [
    {
      name: 'Javier Aristu',
      image: JavierAristu,
      description: 'El escritor, profesor de Literatura y referente de la izquierda andaluza ha fallecido en Merida a los 72 años',
      birth: '03-05-1949',
      desease: '20-09-2021'
    },
    {
      name: 'Pilar Estébanez',
      image: Pilar,
      description: 'Pilar Estébanez, fundadora y presidenta de honor de Médicos del Mundo en España, falleció el jueves',
      birth: '09-03-1974',
      desease: '18-09-2021'
    },
    {
      name: 'Carmen Rovira',
      image: Carmen,
      description: 'Natural de Huelva, impulsó la lectura de los textos originales, su contextualización y el análisis de las consecuencias en los',
      birth: '01-12-1932',
      desease: '15-09-2021'
    },

  ]
  return (
    <FlatList data={data} renderItem={({ item }) => <SocialCard {...item} />} style={[styles.root, { backgroundColor: colors.background }]} >

    </FlatList>
  )
}

export default Social
