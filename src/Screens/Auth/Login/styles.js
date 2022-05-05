import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../../../styles/responsiveSize';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      marginHorizontal: moderateScale(24),
      // backgroundColor:'red'
    },
    welcomeBackStyle: {
      fontSize: textScale(24),
      color: colors.white,
    },
    welcomeTextStyle: {
      fontSize: textScale(15),
      color: colors.textGray,
      marginTop: moderateScaleVertical(6),
    },
    countryCodePicker: {
      flex: 0.3,
      alignItems: "center",
      paddingVertical: moderateScaleVertical(15),
      borderRadius: moderateScale(8),
      flexDirection: "row",
      backgroundColor: colors.mediumDarkGray,
    },
    buttonStyle:{ 
      color: colors.white, 
      textTransform: "uppercase" 
    },
    rightTextStyle:{
      color:colors.white, 
      marginRight:moderateScale(16)
    },
    otpContainer:{ 
      flexDirection: "row", 
      justifyContent: "space-between" 
    }
  });