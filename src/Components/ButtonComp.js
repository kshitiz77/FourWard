import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
import { height, moderateScale, width } from "../styles/responsiveSize";

const ButtonComp = ({
  btnStyle,
  btnText,
  btnTextStyle,
  onPress = () => {},
  rightBtnImg = false,
  image = "",
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ ...styles.btnStyle, ...btnStyle }}
    >
      <View style={styles.btnContainer}>
        {rightBtnImg && (
          <View style={styles.socialIconStyle}>
            <Image source={image} />
          </View>
        )}
        <View style={styles.socialTextContainer}>
          <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>
            {btnText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(4),
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIconStyle: {
    flex: 0.13,
    alignItems: "center",
    justifyContent: "center",
  },
  socialTextContainer: {
    flex: 0.83,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTextStyle: {
    fontFamily:fontFamily.mulishBold,
    fontSize: moderateScale(14),
  },
});

//make this component available to the app
export default ButtonComp;