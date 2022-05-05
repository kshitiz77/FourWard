import { View, Text } from 'react-native'
import React from 'react'
import { ChangePassword, EditProfile, PostDetails } from '../Screens'
import BottomTabNavigation from './BottomTabNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from './navigationStrings'
import AddInfo from '../Screens/AddInfo/AddInfo'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName={navigationStrings.HOME}>
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
       <Stack.Screen 
      name={navigationStrings.ADD_INFO}
      component={AddInfo}
      />
      <Stack.Screen 
      name={navigationStrings.POST_DETAILS}
      component={PostDetails}
      />
    </Stack.Navigator>
  )
}

export default HomeStack