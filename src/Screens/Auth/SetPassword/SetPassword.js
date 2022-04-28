import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../../Components/WrapperContainer";
import navigationStrings from "../../../navigation/navigationStrings"
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import HeaderComp from "../../../Components/HeaderComp";
import ButtonComp from "../../../Components/ButtonComp";
import {
  moderateScale,
  moderateScaleVertical,
  textScale
} from "../../../styles/responsiveSize";
import TextInputWithLable from "../../../Components/TextInputWithLable";

const SetPassword = () => {
  const [isVisible, setIsVisible] = useState();
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword:""
  })
  const {password, confirmPassword} = userData

  const updateState = (data) =>
    setUserData((userData) => ({ ...userData, ...data }));

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp />
          <View style={{ marginTop: moderateScaleVertical(6) }}>
            <Text style={styles.welcomeBackStyle}>{strings.SET_PASSWORD}</Text>
            <Text style={styles.welcomeTextStyle}>{strings.SET_PASSWORD_TEXT}</Text>
          </View>
          <View style={{marginTop:moderateScaleVertical(32)}}>
          <TextInputWithLable
              placeholder={strings.PASSWORD}
              value={password}
              inputStyle={{ marginVertical: moderateScaleVertical(16) }}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ password: text })}
            />
           <TextInputWithLable
              placeholder={strings.CONFIRM_PASSWORD}
              value={password}
              inputStyle={{ marginVertical: moderateScaleVertical(16) }}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ password: text })}
            />
          </View>
        </View> 
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.GET_STARTED}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
              onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
  },
  welcomeBackStyle: {
    fontSize: textScale(24),
    color: colors.white,
  },
  welcomeTextStyle: {
    fontSize: textScale(15),
    color: colors.textDarkGray,
    marginTop: moderateScaleVertical(8),
  },
});

export default SetPassword