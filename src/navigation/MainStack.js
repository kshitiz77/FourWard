import { View, Text } from 'react-native'
import React from 'react'
import HomeStack from './HomeStack'
import navigationStrings from './navigationStrings'

const MainStack = (Stack) => {
  return (
  <Stack.Navigator>
    <Stack.Screen 
      name={navigationStrings.BOTTOM_TAB_Navigation}
      component={HomeStack}
      options={{ headerShown: false }}
      />
   </Stack.Navigator>
  )
}

export default MainStack