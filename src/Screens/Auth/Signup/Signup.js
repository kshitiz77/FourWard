import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform, ScrollView, StyleSheet,
  Text,
  View
} from "react-native";
import DeviceInfo from "react-native-device-info";
import ButtonComp from "../../../Components/ButtonComp";
import CountryCodePicker from "../../../Components/CountryCodePicker";
import HeaderComp from "../../../Components/HeaderComp";
import TextInputWithLable from "../../../Components/TextInputWithLable";
import WrapperContainer from "../../../Components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import {
  moderateScale,
  moderateScaleVertical,
  textScale
} from "../../../styles/responsiveSize";
import { showError } from "../../../utils/helperFunction";
import validator from "../../../utils/validations";
export default function Signup({ navigation }) {
  const [userData, setUserData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [isVisible, setIsVisible] = useState();
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { email, phoneNumber, firstName, lastName, password, confirmPassword } =
    userData;
  const updateState = (data) =>
    setUserData((userData) => ({ ...userData, ...data }));

  const isValidData = () => {
    const error = validator({
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
      confirmPassword,
    });
    if (error) {
      showError(error);
      return;
    }
    return true;
  };

  const _onSubmitSignUpData = () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    let apiData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      phone_code: countryCode,
      country_code: countryFlag,
      device_token: DeviceInfo.getUniqueId(),
      device_type: Platform.OS == "ios" ? "IOS" : "ANDROID",
      password: password,
    };
    console.log(apiData);
    actions
      .signup(apiData)
      .then((res) => {
        console.log("singnup api res_+++++", res);
        alert("User signup successfully....!!!");
        navigation.navigate(navigationStrings.OTP, {
          data: res.data,
        });
        console.log("apidata", res);
        console.log("dfata", data);
      })
      .catch((err) => {
        console.log(err, "err");
        alert(err?.message);
      });
  };
  return (
    <WrapperContainer>
      <View style={{marginHorizontal: moderateScale(24)}}>
          <HeaderComp />
          </View>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
            <View style={{ marginTop: moderateScaleVertical(6) }}>
              <Text style={styles.welcomeBackStyle}>
                {strings.CREATE_NEW_ACCOUNT}
              </Text>
              <Text style={styles.welcomeTextStyle}>
                {strings.CREATE_NEW_ACCOUNT_TEXT}
              </Text>
            </View>
            <View style={{ marginTop: moderateScaleVertical(32) }}>
              <View style={{ flexDirection: "row" }}>
                <TextInputWithLable
                  placeholder={strings.FIRST_NAME}
                  value={firstName}
                  inputStyle={{ flex: 1 }}
                  onChangeText={(text) => updateState({ firstName: text })}
                />
                <View style={{ flex: 0.1 }} />
                <TextInputWithLable
                  placeholder={strings.LAST_NAME}
                  value={lastName}
                  inputStyle={{ flex: 1 }}
                  onChangeText={(text) => updateState({ lastName: text })}
                />
              </View>
              <TextInputWithLable
                placeholder={strings.EMAIL}
                value={email}
                keyboardType="email-address"
                inputStyle={{ marginVertical: moderateScaleVertical(16) }}
                onChangeText={(text) => updateState({ email: text })}
              />
              <View style={{ flexDirection: "row" }}>
                <CountryCodePicker
                  countryCode={countryCode}
                  countryFlag={countryFlag}
                  setCountryCode={setCountryCode}
                  setCountryFlag={setCountryFlag}
                />
                <View style={{ flex: 0.05 }} />
                <TextInputWithLable
                  value={phoneNumber}
                  onChangeText={(text) => updateState({ phoneNumber: text })}
                  placeholder={strings.MOBILE_NUMBER}
                  inputStyle={{ flex: 0.63 }}
                  keyboardType="phone-pad"
                  maxLength={10}
                />
              </View>
              <TextInputWithLable
                placeholder={strings.PASSWORD}
                value={password}
                inputStyle={{ marginVertical: moderateScaleVertical(16) }}
                secureTextEntry={isVisible}
                rightText={isVisible ? "Show" : "Hide"}
                onPressRight={() => setIsVisible(!isVisible)}
                rightTextStyle={{color:colors.white, marginRight:moderateScale(16)}}
                onChangeText={(text) => updateState({ password: text })}
              />
              <TextInputWithLable
                placeholder={strings.CONFIRM_PASSWORD}
                value={confirmPassword}
                inputStyle={{ marginVertical: moderateScaleVertical(8) }}
                rightTextStyle={{color:colors.white, marginRight:moderateScale(16)}}
                secureTextEntry={isVisible}
                rightText={isVisible ? "Show" : "Hide"}
                onPressRight={() => setIsVisible(!isVisible)}
                onChangeText={(text) => updateState({ confirmPassword: text })}
              />
            </View>
        </View>
          </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) , marginHorizontal: moderateScale(24)}}>
            <ButtonComp
              btnText={strings.NEXT}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={styles.btnTextStyle}
              onPress={_onSubmitSignUpData}
            />
          </View>
        </KeyboardAvoidingView>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
    // backgroundColor:'red'
  },
  welcomeBackStyle: {
    fontSize: textScale(24),
    color: colors.white,
    fontFamily:fontFamily.mulishSemiBold
  },
  welcomeTextStyle: {
    fontSize: textScale(15),
    color: colors.textGray,
    marginTop: moderateScaleVertical(6),
    fontFamily:fontFamily.mulishRegular
  },
  countryCodePicker: {
    flex: 0.3,
    alignItems: "center",
    paddingVertical: moderateScaleVertical(15),
    borderRadius: moderateScale(8),
    flexDirection: "row",
    backgroundColor: colors.mediumDarkGray,
  },
  btnTextStyle:{ 
    color: colors.white, 
    textTransform: "uppercase",
    fontFamily:fontFamily.mulishBold
  }
});
