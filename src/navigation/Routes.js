import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStack from './MainStack'
import AuthStack from './AuthStack'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      {false ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  )
}

export default Routes