import React, { useState } from "react";
import {
  KeyboardAvoidingView, Text, View
} from "react-native";
import ButtonComp from "../../../Components/ButtonComp";
import CountryCodePicker from "../../../Components/CountryCodePicker";
import HeaderComp from "../../../Components/HeaderComp";
import TextInputWithLable from "../../../Components/TextInputWithLable";
import WrapperContainer from "../../../Components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import validator from "../../../utils/validations";
import { styles } from "./styles";

const ForgotPassword = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");

  const isValidData = () => {
    const error = validator({
      phoneNumber,
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
    };
    actions.forgotPassword(apiData)
      .then((res) => {
        if (!!res) {
          console.log(res, "res");
          navigation.navigate(
            navigationStrings.OTP,
            {
              data: res?.data,
              phone_code: countryCode,
              phone: phoneNumber,
            }
          );
        }
      })
      .catch((error) => {
        alert("error raised!", error);
      });
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp />
            <Text style={styles.  forgotPasswordTextStyle}>
              {strings.FORGOT_PASSWORD_TITLE}
            </Text>
          <View style={styles.phoneNumberContainer}>
              <CountryCodePicker
                countryCode={countryCode}
                countryFlag={countryFlag}
                setCountryCode={setCountryCode}
                setCountryFlag={setCountryFlag}
              />
              <View style={{ flex: 0.05 }} />
              <TextInputWithLable
                onChangeText={(text) => setPhoneNumber(text)}
                placeholder={strings.MOBILE_NUMBER}
                inputStyle={{ flex: 0.63 }}
                keyboardType="phone-pad"
                maxLength={10}
              />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={styles.buttonContainer}>
            <ButtonComp
              btnText={strings.FORGOT_PASSWORD_TITLE}
              btnStyle={styles.btnStyle}
              onPress={handleSubmitBtn}
              btnTextStyle={styles.btnTextStyle}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};

export default ForgotPassword;
