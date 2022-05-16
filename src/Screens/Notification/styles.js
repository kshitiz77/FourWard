import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
import {StyleSheet} from 'react-native'
import colors from "../../styles/colors";
import fontFamily from '../../styles/fontFamily'

export const styles = StyleSheet.create({
    container: {
      marginLeft: moderateScale(24),
      marginVertical: moderateScaleVertical(24),
      marginBottom:moderateScaleVertical(80)
      
    },
    notificationContainer: {
      flexDirection: "row",
    },
    notificationRightContainer:{
      paddingVertical: moderateScaleVertical(16),
      marginLeft: moderateScale(16),
      borderBottomWidth: 1,
      flex: 1,
      borderBottomColor: colors.mediumDarkGray,
    },
    userName: {
      fontSize: textScale(16),
      color: colors.darkRed,
      fontFamily:fontFamily.mulishMedium
    },
    userImage: {
      width: moderateScale(width / 8),
      height: moderateScale(width / 8),
      borderRadius: moderateScale(width / 16),
    },
    headingStyle:{ 
      color: colors.white, 
      fontSize: textScale(16),
      fontFamily:fontFamily.mulishSemiBold
    },
    timeStyle:{
      color: colors.textDarkGray,
      fontSize: textScale(12),
      fontFamily:fontFamily.mulishRegular
    }
  });