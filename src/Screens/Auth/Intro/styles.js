import { moderateScale, moderateScaleVertical, textScale } from "../../../styles/responsiveSize";
import {StyleSheet} from 'react-native'
import colors from "../../../styles/colors";
export const styles = StyleSheet.create({
    slide: {
      flex: 0.9,
      backgroundColor: colors.mediumDarkGray,
      marginHorizontal: moderateScale(23),
      borderRadius: moderateScale(9),
      paddingHorizontal:moderateScale(24),
      marginTop:moderateScaleVertical(20),
      // justifyContent:'space-between'
    },
    imageContainer:{ 
      flex: 0.65 , 
      alignItems:'center', 
      justifyContent:'center'
    },
    textTitleContainer:{ 
      flex: 0.35 , 
      alignItems:'center', 
      justifyContent:'center'
    },
    title:{
      fontSize:textScale(22),
      color:colors.white,
      textAlign:'center',
    },
    text:{
      color:colors.textGray,
      textAlign:'center',
      marginTop:moderateScaleVertical(8)
    },
    getStartedText:{
      marginTop:moderateScaleVertical(10),
      fontSize:textScale(15),
      color:colors.white
    },
    activeDotStyle:{
      height: moderateScale(4),
      width: moderateScale(42),
      bottom: 4,
      right: moderateScale(90),
      backgroundColor: "red",
    },
    dotStyle:{
      width: moderateScale(21),
      height: moderateScale(4),
      backgroundColor: colors.white,
      bottom: 4,
      right: moderateScale(90),
    }
  });