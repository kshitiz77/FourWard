import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
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
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";

const Login = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState();
  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { phone, password } = userData;
  const updateState = (data) =>
    setUserData((userData) => ({ ...userData, ...data }));

    const handleSubmitBtn = async () => {
      let apiData = {
          phone: phone,
          phone_code: countryCode,
          device_token: 'KDKFJDKFDFKDFDF',
          device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
          password: password,
          loginType: 'admin'
      }
      try {
          const res = await actions.login(apiData)
          console.log("Login api res_+++++",res)
          // alert("User Login successfully....!!!")
      } catch (error) {
          console.log("error raised", error)
          alert(error?.message)
      }
  }

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
              <CountryCodePicker
                countryCode={countryCode}
                countryFlag={countryFlag}
                setCountryCode={setCountryCode}
                setCountryFlag={setCountryFlag}
              />
              <View style={{ flex: 0.05 }} />
              <TextInputWithLable
                onChangeText={(text) => updateState({ phone: text })}
                placeholder={strings.MOBILE_NUMBER}
                inputStyle={{ flex: 0.63 }}
                keyboardType="phone-pad"
                maxLength={10}
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
              minLength={6}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.OTP)}
            >
              <Text style={{ color: colors.white }}>{strings.USE_OTP}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.CHANGE_PASSWORD)
              }
            >
              <Text style={{ color: colors.linkSkyBlue }}>
                {strings.FORGOT_PASSWORD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.LOGIN}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              onPress={handleSubmitBtn}
              btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};

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

export default Login;
