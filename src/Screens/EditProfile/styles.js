import {StyleSheet} from 'react-native'
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, width, height } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({
    container:{
      marginHorizontal: moderateScale(24),
      justifyContent: "space-between",
      flex: 1,
    },
    profileImage: {
      width: moderateScale(width / 4),
      height: moderateScale(width / 4),
      borderRadius: moderateScale(width / 8),
    },
    editIconStyle:{
      height: moderateScale(width / 15),
      width: moderateScale(width / 15),
      alignSelf: "flex-end",
      marginTop: moderateScaleVertical(-15),
      marginLeft: moderateScale(40),
    },
    btnTextStyle:{ 
      color: colors.white, 
      textTransform: "uppercase" ,
      fontFamily:fontFamily.mulishBold
    }
  });