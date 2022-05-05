import { StyleSheet } from "react-native";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(24),
    justifyContent: "space-between",
    flex: 1,
  },
  forgotPasswordTitle:{ 
      marginTop: moderateScaleVertical(6) 
    },
//   descriptionInputStyle: {
//     height: moderateScale(width / 3),
//     fontSize: textScale(14),
//     paddingTop: moderateScaleVertical(8),
//     paddingHorizontal: moderateScale(16),
//     marginVertical: moderateScaleVertical(16),
//   },
  addmorePostStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(width / 5.5),
    height: moderateScale(width / 5.5),
    backgroundColor: colors.mediumDarkGray,
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(16),
  },
});
