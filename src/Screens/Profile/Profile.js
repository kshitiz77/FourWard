import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import WrapperContainer from '../../Components/WrapperContainer'
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';

const Profile = () => {

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
        <View>
          <Image source={imagePath.userIcon}/>
          <Text>{strings.EDIT_PROFILE}</Text>
        </View>
      </View>
    </WrapperContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:moderateScale(24),
    marginVertical:moderateScaleVertical(23)
  }
})
export default Profile