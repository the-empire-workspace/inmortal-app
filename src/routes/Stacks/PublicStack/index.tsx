import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Register, Login } from '@screens'

const Stack = createNativeStackNavigator()

export const PublicStack = () => (
  <Stack.Navigator
    screenOptions={{
      animationTypeForReplace: 'pop',
      animation: 'slide_from_bottom',
      headerShown: false,
    }}
    initialRouteName="Register"
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
)

export default PublicStack
