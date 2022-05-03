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
import DeviceInfo from 'react-native-device-info'
import validator from "../../../utils/validations";
import { showError, showSuccess } from "../../../utils/helperFunction";

const Login = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState();
  const [state, setState] = useState({
    phoneNumber: "",
    password: "",
  });
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { phoneNumber, password } = state;

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const isValidData = () => {
    const error = validator({
      phoneNumber,
      password,
    });
    if (error) {
      showError(error);
      return;
    }
    return true;
  };
  const handleSubmitBtn = () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }

    let apiData = {
      phone: phoneNumber,
      phone_code: countryCode,
      device_token: DeviceInfo.getUniqueId(),
      device_type: Platform.OS == "ios" ? "IOS" : "ANDROID",
      password: password,
      loginType: "admin",
    };
    actions
      .login(apiData)
      .then((res) => {1234567890
        console.log("login api res_+++++", res);
        console.log("apidata", res);
      })
      .catch((err) => {
        console.log(err, "err");
        showError(err);
      });
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
              <CountryCodePicker
                countryCode={countryCode}
                countryFlag={countryFlag}
                setCountryCode={setCountryCode}
                setCountryFlag={setCountryFlag}
              />
              <View style={{ flex: 0.05 }} />
              <TextInputWithLable
                onChangeText={(text) => updateState({ phoneNumber: text })}
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
