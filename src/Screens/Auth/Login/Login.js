import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryCodePicker from "../../../Components/CountryCodePicker";
import WrapperContainer from "../../../Components/WrapperContainer";
import HeaderComp from "../../../Components/HeaderComp";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import ButtonComp from "../../../Components/ButtonComp";
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import TextInputWithLable from "../../../Components/TextInputWithLable";
import imagePath from "../../../constants/imagePath";

const Login = () => {
  const [isVisible, setIsVisible] = useState();
  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });

  const { phone, password } = userData;
  const updateState = (data) =>
    setUserData((userData) => ({ ...userData, ...data }));

  const onSelect = (country) => {
    console.log("country", country);
    console.log("country.cca2", country.cca2);
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0]);
    setCountrySelected(false);
  };
  return (
    <WrapperContainer>
        <View style={styles.container}>
        <View>
          <HeaderComp />
          <View style={{ marginTop: moderateScaleVertical(6) }}>
            <Text style={styles.welcomeBackStyle}>{strings.WELCOME_BACK}</Text>
            <Text style={styles.welcomeTextStyle}>{strings.WELCOME_TEXT}</Text>
          </View>
          <View style={{ marginTop: moderateScaleVertical(32) }}>
            <View style={{ flexDirection: "row" }}>
              <CountryCodePicker />
              <View style={{ flex: 0.05 }} />
              <TextInputWithLable
                onChangeText={(text) => updateState({ phone: text })}
                placeholder={strings.MOBILE_NUMBER}
                inputStyle={{ flex: 0.63 }}
                keyboardType="phone-pad"
              />
            </View>
            <TextInputWithLable
              placeholder={strings.PASSWORD}
              label={strings.PASSWORD}
              value={password}
              inputStyle={{ marginVertical: moderateScaleVertical(16) }}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              
              onChangeText={(text) => updateState({ password: text })}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <Text style={{ color: colors.white }}>{strings.USE_OTP}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: colors.linkSkyBlue }}>
                {strings.FORGOT_PASSWORD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAwareScrollView
        behavior={Platform.OS =='android'? 'height': 'padding'}
        contentContainerStyle={{marginVertical:moderateScaleVertical(48)}}
      >
          <ButtonComp
            btnText={strings.LOGIN}
            btnStyle={{ backgroundColor: colors.btnOrange }}
            btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
          />
      </KeyboardAwareScrollView>
        </View>
    </WrapperContainer>
  );
};

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
    color: colors.textGray,
    marginTop: moderateScaleVertical(6),
  },
  countryCodePicker: {
    flex: 0.3,
    alignItems: "center",
    paddingVertical: moderateScaleVertical(15),
    borderRadius: moderateScale(8),
    flexDirection: "row",
    backgroundColor: colors.mediumDarkGray,
  },
});

export default Login;
