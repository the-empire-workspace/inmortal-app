import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainTabComponent from './MainTabComponent'
import { Personal, Social } from 'screens'
import { HeaderButton, HeaderTitle } from './Header'
import { useTheme } from 'providers'

const Tab = createBottomTabNavigator()

const MainTab: FC<any> = () => {
  const { colors } = useTheme()

  const options = {
    headerShown: true,
    headerTitle: () => <HeaderTitle />,
    headerRight: () => <HeaderButton />,
    headerStyle: { backgroundColor: colors.background },
  }

  return (
    <Tab.Navigator
      screenOptions={options}
      initialRouteName={'Dashboard'}
      tabBar={props => <MainTabComponent {...props} />}
    >
      <Tab.Screen name="Social" component={Social} />
      <Tab.Screen name="Personal" component={Personal} />
    </Tab.Navigator>
  )
}

export default MainTab
