import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  EmergencyContact,
  EmergencyInformation,
  NewEmergency,
} from './elements'

const Stack = createNativeStackNavigator()

const Emergency: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        animation: 'slide_from_bottom',
        headerShown: false,
      }}
      initialRouteName="NewEmergency"
    >
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="NewEmergency" component={NewEmergency} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
        <Stack.Screen
          name="EmergencyInformation"
          component={EmergencyInformation}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default Emergency
