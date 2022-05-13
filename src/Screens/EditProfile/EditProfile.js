import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import ButtonComp from "../../Components/ButtonComp";
import HeaderComp from "../../Components/HeaderComp";
import TextInputWithLable from "../../Components/TextInputWithLable";
import WrapperContainer from "../../Components/WrapperContainer";
import imagePath from "../../constants/imagePath";
import strings from "../../constants/lang";
import actions from "../../redux/actions";
import colors from "../../styles/colors";
import CountryCodePicker from "../../Components/CountryCodePicker";
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from "../../styles/responsiveSize";
import { openGallery } from "../../utils/imagePickerFun";
import { styles } from "./styles";

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
  const { email, phone, firstName, lastName, profileImage, imageType } = state;
  const [countryCode, setCountryCode] = useState("91");
  const [countryFlag, setCountryFlag] = useState("IN");
  const [loading, setLoading] = useState(false)
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  useEffect(() => {
    if (userData) {
      setState({
        email: userData?.email,
        phone: userData?.phone,
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        profileImage: userData?.profile,
      });
    }
  }, [userData]);

  const _selectProfileImage = async() => {
    try {
      const res = await openGallery();
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
    setLoading(true)
    if(!!profileImage){
      let selectedImg = new FormData();
      selectedImg.append("image", {
        uri: profileImage,
        name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
        type: imageType,
      });
      actions.imgUpload(selectedImg, { "Content-Type": "multipart/form-data" })
      .then((res) => {
        console.log("img upload sucessfully", res);
        // setSelectedPhoto(res.data)
        setLoading(false)
        updateState({
          profileImage: res.data,
        });
        alert(res?.message);
      })
      .catch((err) => {
        console.log(err, "err");
        alert(err?.message);
      });
    }

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
    <WrapperContainer isLoading={loading} withModal={loading}>
      <View style={styles.container}>
        <View>
          <HeaderComp
            showTitle={true}
            title={strings.EDIT_PROFILE}
            onPressBack={() => navigation.goBack()}
          />
          <View style={{ marginTop: moderateScaleVertical(42) }}>
            <View style={{ alignItems: "center" }}>
              <View style={styles.profileImage}>
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
                    style={styles.editIconStyle}
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
              {phone ? (
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
              ) : null}
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
              btnTextStyle={styles.btnTextStyle}
              onPress={_submitEditProfileData}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};

export default EditProfile;
