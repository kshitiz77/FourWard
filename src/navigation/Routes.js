import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import IntroStack from "./IntroStack";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const Routes = () => {
  const userData = useSelector((state) => state?.userData?.userData);
  const appIntroData = useSelector((state) => state?.introReducer?.appIntroData);
  console.log(appIntroData,"appIntroData");
  console.log("userData",userData?.access_token);
  return (
    <NavigationContainer>
      {!!appIntroData 
        ? IntroStack(Stack)
        : userData?.access_token
        ? MainStack(Stack)
        : AuthStack(Stack)}
    </NavigationContainer>
  );
};

export default Routes;
