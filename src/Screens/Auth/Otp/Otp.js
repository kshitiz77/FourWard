import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../../Components/WrapperContainer";
import navigationStrings from "../../../navigation/navigationStrings";
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import HeaderComp from "../../../Components/HeaderComp";
import ButtonComp from "../../../Components/ButtonComp";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../styles/responsiveSize";
import TextInputWithLable from "../../../Components/TextInputWithLable";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

const Otp = ({ navigation, route }) => {
  const [code, setCode] = useState();
  const apiData = route?.params?.data;
  console.log(apiData);
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp />
          <View style={{ marginTop: moderateScaleVertical(6) }}>
            <Text style={styles.welcomeBackStyle}>
              {strings.ENTER_VERIFY_CODE_TEXT} +{apiData?.country_code}
              {apiData?.phone}
            </Text>
            <Text style={styles.welcomeTextStyle}>
              {strings.EDIT_MY_MOBILE_NUMBER}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: moderateScaleVertical(32),
            }}
          >
            <SmoothPinCodeInput
              // ref={this.pinInput}
              cellStyle={{
                color: "white",
                backgroundColor: colors.mediumDarkGray,
                borderRadius: moderateScale(8),
              }}
              textStyle={{
                fontSize: textScale(14),
                color: colors.white,
              }}
              value={code}
              onTextChange={(code) => setCode(code)}
              // onFulfill={this._checkCode}
              onBackspace={() => console.log("No more back.")}
            />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <Text style={styles.belowTextStyle}>{strings.RESEND_CODE} 0:14</Text>
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.VERIFY}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
              onPress={() =>
                navigation.navigate(navigationStrings.SET_PASSWORD)
              }
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
  },
  welcomeBackStyle: {
    fontSize: textScale(24),
    color: colors.white,
  },
  welcomeTextStyle: {
    fontSize: textScale(15),
    color: colors.linkBlue,
    marginTop: moderateScaleVertical(8),
  },
  belowTextStyle: {
    marginBottom: moderateScaleVertical(24),
    fontSize: textScale(15),
    color: colors.white,
  },
});
export default Otp;
