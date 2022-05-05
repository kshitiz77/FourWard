import { View, Text, KeyboardAvoidingView , StyleSheet} from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HeaderComp from "../../Components/HeaderComp";
import strings from "../../constants/lang";
import TextInputWithLable from "../../Components/TextInputWithLable";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../styles/responsiveSize";
import ButtonComp from "../../Components/ButtonComp";
import colors from "../../styles/colors";
import { useSelector } from "react-redux";
import { apiPost } from "../../utils/utils";
import { CHANGE_PASSWORD } from "../../config/urls";
import { NavigationContainer } from "@react-navigation/native";
import navigationStrings from "../../navigation/navigationStrings";
import actions from "../../redux/actions";

const ChangePassword = ({ navigation, route }) => {
  const userData = useSelector((state) => state?.userData?.userData);
  console.log("userData", userData);
  const [isVisible, setIsVisible] = useState();
  const userId = route?.params?.data?.id;
  const forgotPasswordScreen = route?.params?.key

  const [state, setState] = useState({
    password: "",
    currentPassword: "",
  });
  const { password, currentPassword } = state;

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const handleChangePassword = async () => {
    let apiData = {
      user_id: userId ? userId : userData.id,
      password: password,
    };
    actions.changePassword( apiData)
      .then((res) => {
        alert("Change password sucessfully !", res);
       {forgotPasswordScreen ? navigation.navigate(navigationStrings.LOGIN) : navigation.goBack()} ;
      })
      .catch((error) => {
        alert("error raised!", error);
      });
  };
  return (
    <WrapperContainer>
      <View
        style={styles.container}
      >
        <View>
          <HeaderComp showTitle={true} title={strings.CHANGE_PASSWORD} />
          <View style={{ marginTop: moderateScaleVertical(42) }}>
            <TextInputWithLable
              placeholder={strings.PASSWORD}
              value={password}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ password: text })}
              rightTextStyle={styles.rightTextStyle}
            />
            <TextInputWithLable
              placeholder={strings.CURRENT_PASSWORD}
              value={currentPassword}
              inputStyle={{ marginVertical: moderateScaleVertical(16) }}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ currentPassword: text })}
              rightTextStyle={styles.rightTextStyle}
            />
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
              onPress={handleChangePassword}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal: moderateScale(24),
    justifyContent: "space-between",
    flex: 1,
  },
  rightTextStyle:{
    color: colors.white,
    marginRight: moderateScale(16),
  }
})
export default ChangePassword;
