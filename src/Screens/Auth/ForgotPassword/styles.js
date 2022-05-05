import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
    // backgroundColor:'red'
  },
  forgotPasswordTextStyle: {
    fontSize: textScale(24),
    color: colors.white,
  },
  phoneNumberContainer: {
    marginTop: moderateScaleVertical(32),
    flexDirection:'row'
  },
  buttonContainer:{ 
    marginBottom: moderateScaleVertical(56) 
  },
  btnStyle:{ 
    backgroundColor: colors.btnOrange 
  },
  btnTextStyle:{ 
    color: colors.white, 
    textTransform: "uppercase" 
  }
});
