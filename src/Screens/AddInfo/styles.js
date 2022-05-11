import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
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
  forgotPasswordTitle: {
    marginTop: moderateScaleVertical(6),
  },
  addImageContainer: {
    marginTop: moderateScaleVertical(8),
    flexDirection: "row",
    flexWrap:'wrap',
    
  },
  selectImgStyle: {
    width: moderateScale(width / 5.5),
    height: moderateScale(width / 5.5),
    borderRadius: moderateScale(8),
    marginLeft:moderateScale(12),
    marginBottom:moderateScaleVertical(12),
    // backgroundColor:colors.mediumDarkGray
  },
  descriptionInputStyle: {
    height: moderateScale(width / 3),
    fontSize: textScale(14),
    paddingTop: moderateScaleVertical(8),
    marginVertical: moderateScaleVertical(16),
    // alignSelf:'flex-start'
  },
  addmorePostStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(width / 5.5),
    height: moderateScale(width / 5.5),
    backgroundColor: colors.mediumDarkGray,
    borderRadius: moderateScale(8),
    marginLeft:moderateScale(12)
  },
  btnStyle:{ 
    color: colors.white, 
    textTransform: "uppercase",
    fontFamily:fontFamily.mulishBold
  },
  removeBtnStyle:{ 
    position: "absolute", 
    top: -8, 
    right: -5
  }
});
