import { View, Text } from 'react-native'
import React from 'react'
import { Home } from '../Screens'
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from './navigationStrings'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen 
      name={navigationStrings.HOME}
      component={Home}
      />
    </Stack.Navigator>
  )
}

export default HomeStack