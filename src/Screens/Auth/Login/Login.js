import React, { useState } from "react";
import {
  KeyboardAvoidingView, Platform, Text, TouchableOpacity, View, ActivityIndicator
} from "react-native";
import DeviceInfo from 'react-native-device-info';
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
  moderateScaleVertical
} from "../../../styles/responsiveSize";
import { showError } from "../../../utils/helperFunction";
import validator from "../../../utils/validations";
import { styles } from "./styles";

const Login = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState();
  const [state, setState] = useState({
    phoneNumber: "",
    password: "",
  });
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { phoneNumber, password } = state;
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    actions
      .login(apiData)
      .then((res) => {
        console.log("login api res_+++++", res);
        console.log("apidata", res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err, "err");
        showError("Enter correct credential")
      });
  };

  return (
    <WrapperContainer isLoading={loading} withModal={loading}>
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
              inputStyle={{ marginVertical: moderateScaleVertical(16)  }}
              rightTextStyle={styles.rightTextStyle}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ password: text })}
              minLength={6}
            />
          </View>
          <View
            style={styles.otpContainer}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.OTP, )}
            >
              <Text style={{ color: colors.white, fontFamily:fontFamily.mulishRegular }}>{strings.USE_OTP}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.FORGOT_PASSWORD)
              }
            >
              <Text style={{ color: colors.linkSkyBlue, fontFamily:fontFamily.mulishRegular}}>
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
              btnTextStyle={styles.buttonStyle}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};



export default Login;
