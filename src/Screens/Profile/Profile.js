import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import WrapperContainer from '../../Components/WrapperContainer'
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings'

const Profile = ({navigation}) => {

  const signOut = async () => {
    try {
      actions.logout();
        await GoogleSignin.signOut();
    } catch (error) {
        console.log(error)

    }
}
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text style={{color:colors.white, fontSize:textScale(16), }}>{strings.PROFILE}</Text>
        <TouchableOpacity style={styles.menuStyle} onPress={()=>navigation.navigate(navigationStrings.EDIT_PROFILE)}>
          <Image source={imagePath.userIcon} />
          <Text style={styles.menuTextStyle}>{strings.EDIT_PROFILE}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuStyle} onPress={()=>navigation.navigate(navigationStrings.CHANGE_PASSWORD)}>
          <Image source={imagePath.keyIcon}/>
          <Text style={styles.menuTextStyle}>{strings.CHANGE_PASSWORD}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuStyle} onPress={()=>actions.logout()}>
          <Image source={imagePath.logoutIcon}/>
          <Text style={styles.menuTextStyle}>{strings.SIGNOUT}</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:moderateScale(24),
    marginVertical:moderateScaleVertical(24)
  },
  menuStyle:{
    flexDirection:'row', 
    marginTop:moderateScaleVertical(32), 
    alignItems:'center'
  },
  menuTextStyle:{
    color:colors.white, 
    fontSize:textScale(15), 
    marginLeft:moderateScale(20)
  }
})
export default Profile