import { View, Text } from 'react-native'
import React from 'react'
import { ChangePassword, EditProfile } from '../Screens'
import BottomTabNavigation from './BottomTabNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from './navigationStrings'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen 
      name={navigationStrings.HOME}
      component={BottomTabNavigation}
      />
       <Stack.Screen 
      name={navigationStrings.CHANGE_PASSWORD}
      component={ChangePassword}
      />
       <Stack.Screen 
      name={navigationStrings.EDIT_PROFILE}
      component={EditProfile}
      />
    </Stack.Navigator>
  )
}

export default HomeStack