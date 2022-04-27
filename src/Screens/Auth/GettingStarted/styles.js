import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import {
  moderateScale,
  height,
  width,
  textScale,
  moderateScaleVertical,
} from "../../../styles/responsiveSize";
import fontFamily from '../../../styles/fontFamily'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: moderateScale(width - width/ 1.51),
    height: moderateScale(height - height/ 1.317),
    resizeMode:'contain'
  },
  btnContainer: {
    flex: 0.6,
    marginHorizontal: moderateScale(24),
  },
  privacyPolicyText: {
    fontSize: textScale(13),
    color: colors.textLightGray,
    textAlign: "center",
    // fontFamily:fontFamily.barlowBold
  },
  phoneLoginBtn: {
    backgroundColor: colors.btnOrange,
    marginVertical: moderateScaleVertical(14),
    fontSize: textScale(14),
    color: colors.white,
  },
  phoneLoginText: {
    color: colors.white,
  },
  orTextStyle: {
    textAlign: "center",
    color: colors.white,
    fontSize: textScale(16),
  },
  socialLoginBtn: {
    backgroundColor: colors.white,
    marginVertical: moderateScaleVertical(14),
  },
  socialbtnText: {
    color: colors.black,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom:moderateScaleVertical(52)
  },
  newHereText: {
    color: colors.white,
    fontSize: textScale(14),
    fontWeight: "bold",
  },
  signupBtnStyle: {
    color: colors.linkBlue,
    fontSize: textScale(14),
    fontWeight: "bold",
  },
});
