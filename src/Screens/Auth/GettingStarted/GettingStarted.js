import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import imagePath from "../../../constants/imagePath";
import WrapperContainer from "../../../Components/WrapperContainer";
import { styles } from "./styles";
import strings from "../../../constants/lang";
import ButtonComp from "../../../Components/ButtonComp";
import navigationStrings from "../../../navigation/navigationStrings";

const GettingStarted = ({ navigation }) => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
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
          />
          <ButtonComp
            btnStyle={styles.socialLoginBtn}
            btnTextStyle={styles.socialLoginBtn}
            btnText={strings.LOG_IN_WITH_FACEBOOK}
            image={imagePath.facebookLogo}
            rightBtnImg={true}
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
      </View>
    </WrapperContainer>
  );
};

export default GettingStarted;
