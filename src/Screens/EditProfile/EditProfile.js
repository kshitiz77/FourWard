import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TouchableOpacity,
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
import navigationStrings from "../../navigation/navigationStrings";
import ImagePicker from "react-native-image-crop-picker";
import { openGalleray } from "../../utils/imagePickerFun";
import actions from "../../redux/actions";


const EditProfile = ({ navigation }) => {
  const userData = useSelector((state) => state?.userData?.userData);
  console.log("userData", userData);
  const [state, setState] = useState({
    profileImage: null,
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    imageType: null,
  });
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const { email, phone, firstName, lastName, profileImage, imageType } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  // const userDataObj = {
  //   profile_Image: profileImage,
  //   first_name: firstName,
  //   last_name: lastName,
  //   email: email,
  //   phone: phone,
  //   phone_code: countryCode,
  //   country_code: countryFlag,
  // };

  useEffect(() => {
    if (userData) {
      setState({
        email: userData?.email,
        phone: userData?.phone,
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        profileImage: userData?.profile,
      });
      setCountryCode(userData?.phone_code);
      setCountryFlag(userData?.country_code);
    }
  }, [userData]);

  const _selectProfileImage = async () => {
    try {
      const res = await openGalleray();
      console.log("image res", res);
      updateState({
        profileImage: res?.sourceURL || res?.path,
        imageType: res?.mime,
      });
    } catch (error) {
      console.log("error raised", error);
    }
  };


  const _submitEditProfileData = async () => {
    let formaData = new FormData();
    formaData.append("first_name", firstName);
    formaData.append("last_name", lastName);
    formaData.append("email", email);
    formaData.append("image", {
      uri: profileImage,
      name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      type: imageType,
    });
    console.log(formaData, "formaData");

    actions
      .editProfile(formaData, { "Content-Type": "multipart/form-data" })
      .then((res) => {
        console.log("editProfile api res_+++++", res);
        alert(res?.message);
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err, "err");
        alert(err?.message);
      });
  };
  console.log(profileImage, "profileImage");

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
              <View style={[styles.profileImage, { backgroundColor: "red" }]}>
                <Image
                  source={
                    profileImage
                      ? { uri: profileImage }
                      : require("../../assets/images/ironMan.jpg")
                  }
                  style={styles.profileImage}
                />
              </View>

              <View>
                <TouchableOpacity
                  // hitSlop={{ left: 250, right: 250, top: 250, bottom: 250 }}
                  onPress={_selectProfileImage}
                >
                  <Image
                    source={imagePath.editIcon}
                    style={{
                      height: moderateScale(width / 15),
                      width: moderateScale(width / 15),
                      alignSelf: "flex-end",
                      marginTop: moderateScaleVertical(-15),
                      marginLeft: moderateScale(40),
                    }}
                  />
                </TouchableOpacity>
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
              onPress={_submitEditProfileData}
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
    borderRadius: moderateScale(width / 8),
  },
});
export default EditProfile;
