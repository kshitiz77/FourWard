import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "./navigationStrings";
import { Search, SelectPhoto, Home, Notification, Profile } from "../Screens";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import { height, moderateScale, width } from "../styles/responsiveSize";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: colors.mediumDarkGray,
          borderTopLeftRadius: moderateScale(8),
          borderTopRightRadius: moderateScale(8),
          borderTopWidth:moderateScale(0)
        },
      })}
    >
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.homeIcon}
              style={{
                resizeMode: "contain",
                height: moderateScale(height - height / 1.06),
                width: moderateScale(width - width / 1.06),
                tintColor: focused ? colors.btnOrange : colors.white,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SEARCH_SCREEN}
        component={Search}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.searchIcon}
              style={{
                resizeMode: "contain",
                height: moderateScale(height - height / 1.06),
                width: moderateScale(width - width / 1.06),
                tintColor: focused ? colors.btnOrange : colors.white,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SELECT_PHOTO}
        component={SelectPhoto}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.addIcon}
              style={{
                resizeMode: "contain",
                height: moderateScale(height - height / 1.06),
                width: moderateScale(width - width / 1.06),
                tintColor: focused ? colors.btnOrange : colors.white,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.notifyIcon}
              style={{
                resizeMode: "contain",
                height: moderateScale(height - height / 1.06),
                width: moderateScale(width - width / 1.06),
                tintColor: focused ? colors.btnOrange : colors.white,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.userIcon}
              style={{
                resizeMode: "contain",
                height: moderateScale(height - height / 1.06),
                width: moderateScale(width - width / 1.06),
                tintColor: focused ? colors.btnOrange : colors.white,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
