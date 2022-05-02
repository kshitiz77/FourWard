import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HeaderComp from "../../Components/HeaderComp";
import strings from "../../constants/lang";
import TextInputWithLable from "../../Components/TextInputWithLable";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import { useSelector } from "react-redux";
import ButtonComp from "../../Components/ButtonComp";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import CountryCodePicker from "../../Components/CountryCodePicker";

const EditProfile = ({ navigation }) => {
  const userData = useSelector((state) => state?.userData?.userData);
  console.log("userData", userData);
  const [state, setState] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { email, phone, firstName, lastName,  } =
    state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  useEffect(() => {
    if (userData) {
      setState({
        email: userData.email,
        phone: userData.phone,
        firstName: userData.first_name,
        lastName: userData.last_name,
      });
      setCountryCode(userData.phone_code);
      setCountryFlag(userData.country_code)
    }
  }, [userData]);

  return (
    <WrapperContainer>
      <View
        style={{
          marginHorizontal: moderateScale(24),
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View>
          <HeaderComp
            showTitle={true}
            title={strings.EDIT_PROFILE}
            onPressBack={() => navigation.goBack()}
          />
          <View style={{ marginTop: moderateScaleVertical(42) }}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/images/ironMan.jpg")}
                style={styles.profileImage}
              />
              <View>
                <Image
                  source={imagePath.editIcon}
                  style={{
                    marginTop: moderateScaleVertical(-20),
                    marginRight: moderateScale(-40),
                    alignSelf: "flex-end",
                  }}
                />
              </View>
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
            </View>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.SAVE}
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
  profileImage: {
    width: moderateScale(width / 4),
    height: moderateScale(width / 4),
    resizeMode: "contain",
    borderRadius: moderateScale(width / 8),
  },
});
export default EditProfile;
