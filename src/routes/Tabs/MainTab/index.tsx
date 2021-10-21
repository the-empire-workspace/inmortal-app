import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainTabComponent from './MainTabComponent'

const Tab = createBottomTabNavigator()

const MainTab: FC<any> = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Dashboard'}
      tabBar={props => <MainTabComponent {...props} />}
    >
    </Tab.Navigator>
  )
}

export default MainTab
