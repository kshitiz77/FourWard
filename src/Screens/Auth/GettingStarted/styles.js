import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import {
  moderateScale,
  height,
  width,
  textScale,
  moderateScaleVertical,
} from "../../../styles/responsiveSize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical:moderateScaleVertical(54)
  },
  logoStyle: {
    width: moderateScale(width - width/ 1.51),
    height: moderateScale(height - height/ 1.317),
    resizeMode:'contain'
  },
  btnContainer: {
    marginVertical:moderateScaleVertical(24),
    marginHorizontal: moderateScale(24),
  },
  privacyPolicyText: {
    fontSize: textScale(13),
    color: colors.textLightGray,
    textAlign: "center",
    fontFamily:fontFamily.mulishRegular
  },
  phoneLoginBtn: {
    backgroundColor: colors.btnOrange,
    marginVertical: moderateScaleVertical(14),
    // fontSize: textScale(14),
    fontFamily:fontFamily.mulishRegular,
    color: colors.white,
  },
  phoneLoginText: {
    fontSize: textScale(14),
    fontFamily:fontFamily.mulishBold,
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
    fontFamily:fontFamily.mulishBold,
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
    fontFamily:fontFamily.mulishSemiBold
  },
  signupBtnStyle: {
    color: colors.linkBlue,
    fontSize: textScale(14),
    fontFamily:fontFamily.mulishSemiBold
  },
});
