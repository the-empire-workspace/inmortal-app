import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@providers'
import Alfredo from '@assets/testimg/alfredo.jpeg'
import Pepe from '@assets/testimg/pepe.jpg'
import { SocialCard } from 'components'

const Personal: FC = () => {
  const { colors } = useTheme()

  const data = [
    {
      name: 'Alfredo Guevara',
      image: Alfredo,
      description: 'El intérprete, que se hizo famoso encarnando al personaje de Stanford Blatch, un amigo íntimo de la protagonista de la serie',
      birth: '07-03-1967',
      desease: '10-06-2019',
      comments: 15
    },
    {
      name: 'Pepe Suarez',
      image: Pepe,
      description: 'Pepe Suarez, luchador increible',
      birth: '09-03-1974',
      desease: '18-09-2021',
      comments: 30
    }
  ]
  return (
    <FlatList data={data} keyExtractor={(item) => item.name} renderItem={({ item }) => <SocialCard {...item} />} style={[styles.root, { backgroundColor: colors.background }]} >

    </FlatList>
  )
}

export default Personal
