import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
import { StyleSheet } from 'react-native'
import colors from "../../styles/colors";
export const styles = StyleSheet.create({
    headerStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: moderateScaleVertical(24),
    },
    flatlistContainer: {
      backgroundColor: colors.mediumDarkGray,
      marginBottom: moderateScaleVertical(28),
      paddingHorizontal: moderateScale(8),
      paddingVertical: moderateScaleVertical(16),
      borderRadius: moderateScale(8),
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    centerHeaderText:{
      marginLeft:moderateScale(8)
    },
    userImage: {
      width: moderateScale(width - width / 1.1),
      height: moderateScale(height - height / 1.05),
      borderRadius: moderateScale(width - width / 1.05),
      resizeMode: 'contain',
      marginHorizontal: moderateScale(8)
    },
    postImage: {
      width: moderateScale(width - width / 5.5),
      height: moderateScale(height - height / 1.6),
      resizeMode: 'contain',
      marginVertical: moderateScaleVertical(16),
      alignSelf: 'center'
    },
    postTime:{
      color: colors.textDarkGray_2, 
      marginVertical: moderateScaleVertical(8), 
      fontSize:moderateScale(13)
    },
    postBottomView:{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginTop:moderateScaleVertical(8)
    },
    likesTextStyle:{
      color: colors.white, 
      marginHorizontal: moderateScale(24), 
      fontSize:textScale(15)
    },
    shareIcon: {
      width: moderateScale(width - width / 1.07), 
      resizeMode: "contain", 
      marginRight: moderateScale(10),
      height: moderateScale(height - height / 1.03)
    }
  });