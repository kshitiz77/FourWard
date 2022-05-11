import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import {
    moderateScale,
    moderateScaleVertical,
    textScale
} from "../../../styles/responsiveSize";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
  },
  welcomeBackStyle: {
    fontSize: textScale(24),
    color: colors.white,
    fontFamily:fontFamily.mulishSemiBold
  },
  welcomeTextStyle: {
    fontSize: textScale(15),
    color: colors.linkBlue,
    marginTop: moderateScaleVertical(8),
    fontFamily:fontFamily.mulishRegular
  },
  inputContainerStyle: {
    flexDirection: "row",
    marginVertical: moderateScaleVertical(32),
  },
  belowTextStyle: {
    marginBottom: moderateScaleVertical(24),
    fontSize: textScale(15),
    color: colors.white,
    fontFamily:fontFamily.mulishRegular,
  },
  cellStyle: {
    color: "white",
    backgroundColor: colors.mediumDarkGray,
    borderRadius: moderateScale(8),
  },
  textStyle: {
    fontSize: textScale(14),
    color: colors.white,
  },
  resendContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  resendBtn: {
    color: colors.darkRed,
    fontSize: textScale(14),
    fontFamily: fontFamily.mulishRegular
  },
  btnTextStyle: {
    color: colors.white,
    textTransform: "uppercase",
    fontFamily: fontFamily.mulishBold
  },
});
