import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import strings from '../../constants/lang'

const Notification = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
      <Text style={{color:colors.white, fontSize:textScale(16), }}>{strings.NOTIFICATION}</Text>
      </View>
    </WrapperContainer>
  )
}

const styles = StyleSheet.create({
container:{
    marginHorizontal:moderateScale(24),
    marginVertical:moderateScaleVertical(24)
  },
})

export default Notification