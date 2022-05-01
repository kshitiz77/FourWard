import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import WrapperContainer from '../../Components/WrapperContainer'
import actions from '../../redux/actions';

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
      <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}} onPress={signOut}>
        <Text style={{color:'#fff'}}>Logout</Text>
      </TouchableOpacity>
    </WrapperContainer>
  )
}

export default Profile