import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainTab } from '../../Tabs'
import { Emergency, Notification, UserProfile } from '@screens'

const Stack = createNativeStackNavigator()

export const PrivateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        animation: 'slide_from_bottom',
        headerShown: false,
      }}
      initialRouteName="main"
    >
      <Stack.Screen name="main" component={MainTab} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Emergency" component={Emergency} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default PrivateStack
