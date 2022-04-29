import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import actions from '../../redux/actions'

const Home = () => {
  return (
    <WrapperContainer>
    <View style={{flex: 1, backgroundColor:'black'}}>
<TouchableOpacity onPress={()=> actions.logout()}>
      <Text style={{color:'white'}}>Logout</Text>
</TouchableOpacity>
    </View>
    </WrapperContainer>
  )
}

export default Home