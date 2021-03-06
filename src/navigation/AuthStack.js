import { View, Text } from 'react-native'
import React from 'react'
import { ChangePassword, ForgotPassword, GettingStarted, Login, Otp, SetPassword, Signup } from '../Screens'
import navigationStrings from './navigationStrings'

const AuthStack = (Stack) => {
  return (

    <Stack.Navigator screenOptions={{ headerShown:false }}>
      
      <Stack.Screen 
      name={navigationStrings.GettingStarted}
      component={GettingStarted}
      />
      <Stack.Screen 
      name={navigationStrings.LOGIN}
      component={Login}
      />
      <Stack.Screen 
      name={navigationStrings.OTP}
      component={Otp}
      />
      <Stack.Screen 
      name={navigationStrings.SET_PASSWORD}
      component={SetPassword}
      />
      <Stack.Screen 
      name={navigationStrings.SIGNUP}
      component={Signup}
      />
       <Stack.Screen 
      name={navigationStrings.FORGOT_PASSWORD}
      component={ForgotPassword}
      />
      <Stack.Screen 
      name={navigationStrings.CHANGE_PASSWORD}
      component={ChangePassword}
      />
    </Stack.Navigator>
  )
}

export default AuthStack