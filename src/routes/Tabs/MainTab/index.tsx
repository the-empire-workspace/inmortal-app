import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainTabComponent from './MainTabComponent'
import { Social } from 'screens'

const Tab = createBottomTabNavigator()

const MainTab: FC<any> = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Dashboard'}
      tabBar={props => <MainTabComponent {...props} />}
    >
      <Tab.Screen name="Social" component={Social} />
    </Tab.Navigator>
  )
}

export default MainTab
