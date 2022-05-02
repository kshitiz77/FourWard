import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import ButtonComp from "../../../Components/ButtonComp";
import CountryCodePicker from "../../../Components/CountryCodePicker";
import HeaderComp from "../../../Components/HeaderComp";
import TextInputWithLable from "../../../Components/TextInputWithLable";
import WrapperContainer from "../../../Components/WrapperContainer";
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../styles/responsiveSize";

export default function Signup({ navigation }) {
  const [userData, setUserData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [isVisible, setIsVisible] = useState();
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { email, phone, firstName, lastName, password, confirmPassword } =
    userData;
  const updateState = (data) =>
    setUserData((userData) => ({ ...userData, ...data }));

  const phoneRegex = /^[0-9]{10}$/;
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const nameRegex = /^[a-zA-Z]{3,12}$/;
  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;

  const _onSubmitSignUpData = async () => {
    if (nameRegex.test(firstName)) {
      if (nameRegex.test(lastName)) {
        if (emailRegex.test(email)) {
          if (phoneRegex.test(phone)) {
            if (strongRegex.test(password)) {
              if (strongRegex.test(confirmPassword)) {
                if (password === confirmPassword) {
                  let apiData = {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone,
                    phone_code: "",
                    country_code: countryCode,
                    device_token: "KDKFJDKFDFKDFDF",
                    device_type: Platform.OS == "ios" ? "IOS" : "ANDROID",
                    password: password,
                  };
                  console.log(apiData);
                  try {
                    const res = await actions.signup(apiData);
                    console.log("singnup api res_+++++", res);
                    alert("User signup successfully....!!!");
                    if (!!res) {
                      navigation.navigate(navigationStrings.OTP, {
                        data: res.data,
                      });
                    }
                  } catch (error) {
                    console.log("error raised", error);
                    alert(error?.message);
                  }
                } else {
                  alert("Password dosen't match");
                }
              } else {
                alert("Please Enter Correct Confirm Password");
              }
            } else {
              alert("Please Enter Correct Password");
            }
          } else {
            alert("Please Enter Correct Phone Number");
          }
        } else {
          alert("Please Enter Correct Email");
        }
      } else {
        alert("Please Enter Correct Last Name");
      }
    } else {
      alert("Please Enter Correct First Name");
    }
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp />
          <ScrollView>
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
                  value={phone}
                  onChangeText={(text) => updateState({ phone: text })}
                  placeholder={strings.MOBILE_NUMBER}
                  inputStyle={{ flex: 0.63 }}
                  keyboardType="phone-pad"
                  maxLength={10}
                />
              </View>
              <TextInputWithLable
                placeholder={strings.PASSWORD}
                value={password}
                inputStyle={{ marginVertical: moderateScaleVertical(16), }}
                secureTextEntry={isVisible}
                rightText={isVisible ? "Show" : "Hide"}
                onPressRight={() => setIsVisible(!isVisible)}g
                onChangeText={(text) => updateState({ password: text })}
              />
              <TextInputWithLable
                placeholder={strings.CONFIRM_PASSWORD}
                value={confirmPassword}
                inputStyle={{ marginVertical: moderateScaleVertical(8) }}
                secureTextEntry={isVisible}
                rightText={isVisible ? "Show" : "Hide"}
                onPressRight={() => setIsVisible(!isVisible)}
                onChangeText={(text) => updateState({ confirmPassword: text })}
              />
            </View>
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.NEXT}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
              onPress={_onSubmitSignUpData}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
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
