import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import {useSelector} from 'react-redux'

const Stack = createStackNavigator();

const Routes = () => {
  const userStatus = useSelector((state) => state?.userStatus?.userData)
  console.log(userStatus?.access_token)
  return (
    <NavigationContainer>
      {false ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  )
}

export default Routes