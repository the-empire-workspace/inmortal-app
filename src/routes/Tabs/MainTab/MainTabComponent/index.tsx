import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useTheme } from 'providers'
import Global from '@assets/img/global.png'
import Social from '@assets/img/social.png'
import Emergency from '@assets/img/emergency.png'
import Services from '@assets/img/services.png'
import Profile from '@assets/img/profile.png'

const Nav = [
  {
    key: 'Global',
    label: 'Global',
    icon: Global,
    route: 'Social',
  },
  {
    key: 'Personal',
    label: 'Personal',
    icon: Social,
    route: 'Personal',
  },
  {
    key: 'Emergency',
    label: 'Emergency',
    icon: Emergency,
    route: 'Emergency',
  },
  {
    key: 'Services',
    label: 'Services',
    icon: Services,
    route: 'Services',
  },
  {
    key: 'Profile',
    label: 'Profile',
    icon: Profile,
    route: 'Profile',
  },
]

const MainTabComponent: FC<any> = ({ navigation, state }) => {
  const { colors } = useTheme()

  return (
    <View style={[styles.nav, { backgroundColor: colors?.primary }]}>
      {Nav.map((data: any, index: any) => {
        const { width, height } = Image.resolveAssetSource(data?.icon)

        return (
          <TouchableOpacity
            style={[
              styles.navItem,
              state?.index === index
                ? { backgroundColor: colors.secundary }
                : {},
            ]}
            key={index}
            onPress={() => navigation.navigate(data.route)}
          >
            <Image
              style={{ width: width / 14, height: height / 14 }}
              source={data.icon}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default MainTabComponent
