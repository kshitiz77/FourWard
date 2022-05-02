import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, {useEffect} from "react";
import imagePath from "../../../constants/imagePath";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import WrapperContainer from "../../../Components/WrapperContainer";
import { styles } from "./styles";
import strings from "../../../constants/lang";
import { GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'
import ButtonComp from "../../../Components/ButtonComp";
import navigationStrings from "../../../navigation/navigationStrings";
import { removeUserData } from "../../../utils/utils";
import actions from "../../../redux/actions";

const GettingStarted = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure()
}, [])

const googleLogin = async () => {
  try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo)
      const email = userInfo.user.email;
      const userId = userInfo.user.id;
      const data = { email, userId }
      actions.login(data)
      // this.setState({ userInfo });
  } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          console.log("error", error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          console.log("error", error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.log("error", error)
      } else {
          // some other error happened
          console.log("error", error)
      }
  }
};

const fbLogin = (resCallBack) => {
  LoginManager.logOut();
  return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
          console.log("FB_LOGIN_RESULT =====>", result);
          if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
              resCallBack({ message: "email is required" })
          }
          if (result.isCancelled) {
              console.log("error")
          } else {
              const infoResquest = new GraphRequest(
                  '/me?fields = email, name, picture',
                  null,
                  resCallBack
              );
              new GraphRequestManager().addRequest(infoResquest).start()
          }
      },
      function (error) {
          console.log("login failed with error", error)
      }
  )
}

const onFbLogin = async () => {
  try {
      await fbLogin(resInfoCallBack)
  } catch (error) {
      console.log("error", error)
  }
}

const resInfoCallBack = async (error, result) => {
  if (error) {
      console.log("Login Error", error)
  } else {
      const userData = result;
      console.log(userData)
      actions.login(userData);

  }
}

  return (
    <WrapperContainer>
      <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image source={imagePath.logo} style={styles.logoStyle} />
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.privacyPolicyText}>
            {strings.PRIVACY_POLICY_TEXT}
          </Text>
          <ButtonComp
            btnStyle={styles.phoneLoginBtn}
            btnTextStyle={styles.phoneLoginText}
            btnText={strings.LOGIN_IN_WITH_PHONE_NUMBER}
            onPress={()=> navigation.navigate(navigationStrings.LOGIN)}
          />
          <Text style={styles.orTextStyle}>{strings.OR}</Text>
          <ButtonComp
            btnStyle={styles.socialLoginBtn}
            btnTextStyle={styles.socialLoginBtn}
            btnText={strings.LOG_IN_WITH_GOOGLE}
            image={imagePath.googleLogo}
            rightBtnImg={true}
            onPress={googleLogin}
          />
          <ButtonComp
            btnStyle={styles.socialLoginBtn}
            btnTextStyle={styles.socialLoginBtn}
            btnText={strings.LOG_IN_WITH_FACEBOOK}
            image={imagePath.facebookLogo}
            rightBtnImg={true}
            onPress={onFbLogin}
          />
          <ButtonComp
            btnStyle={styles.socialLoginBtn}
            btnTextStyle={styles.socialLoginBtn}
            btnText={strings.LOGIN_IN_WITH_APPLE}
            image={imagePath.appleLogo}
            rightBtnImg={true}
          />
        </View>
        <TouchableOpacity
          style={styles.bottomView}
          onPress={() => navigation.navigate(navigationStrings.SIGNUP)} 
        >
          <Text style={styles.newHereText}>{strings.NEW_HERE} </Text>
          <Text style={styles.signupBtnStyle}>{strings.SIGN_UP}</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default GettingStarted;
