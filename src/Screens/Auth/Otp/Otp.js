import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform, Text, TouchableOpacity, View
} from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import ButtonComp from "../../../Components/ButtonComp";
import HeaderComp from "../../../Components/HeaderComp";
import WrapperContainer from "../../../Components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from '../../../redux/actions';
import colors from "../../../styles/colors";
import {
  moderateScaleVertical
} from "../../../styles/responsiveSize";
import { styles } from "./styles";

const Otp = ({ navigation, route }) => {
  const [code, setCode] = useState();
  console.log(route, "route");
  const apiData = route?.params?.data;
  const phoneCode = route?.params?.phone_code;
  const phoneNumber = route?.params?.phone;
  console.log(apiData);

  const handleVerify = () => {
    console.log(code, "code");
    console.log(apiData.otp, 'otp');
    if (code == apiData.otp) {
      actions.getOtp( apiData)
        .then((res) => {
          if (res) {
            console.log(res?.data, "res");
            console.log(res?.data?.otp, "otp");
           navigation.navigate(navigationStrings.CHANGE_PASSWORD, {
                    data: res.data,
                    key: strings.FORGOT_PASSWORD,
                  })
          }
        })
        .catch((error) => {
          alert("error raised!", error);
        });
    } else {
      alert("Verify Error");
    }
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp />
          <View style={{ marginTop: moderateScaleVertical(6) }}>
            <Text style={styles.welcomeBackStyle}>
              {strings.ENTER_VERIFY_CODE_TEXT} +{phoneCode}
              {phoneNumber}
            </Text>
            <Text style={styles.welcomeTextStyle}>
              {strings.EDIT_MY_MOBILE_NUMBER}
            </Text>
          </View>
          <View
            style={styles.inputContainerStyle}
          >
            <SmoothPinCodeInput
              // ref={this.pinInput}
              cellStyle={styles.cellStyle}
              textStyle={styles.textStyle}
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
          <View
            style={styles.resendContainer}
          >
            <Text style={styles.belowTextStyle}>
              {strings.RESEND_CODE_IN} 0:30
            </Text>
            <TouchableOpacity>
              <Text style={styles.resendBtn}>
                {strings.RESEND_CODE}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.VERIFY}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={styles.btnTextStyle}
              onPress={handleVerify}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};


export default Otp;
