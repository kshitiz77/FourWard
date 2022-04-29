import { View, Text } from "react-native";
import React from "react";
import { Intro } from "../Screens";
import navigationStrings from "./navigationStrings";
const IntroStack = (Stack) => {
  return (
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name={navigationStrings.INTRO} component={Intro} />
      </Stack.Navigator>
  );
};

export default IntroStack;
