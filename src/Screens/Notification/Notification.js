import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import strings from '../../constants/lang'
import imagePath from '../../constants/imagePath'


const Notification = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
      <Text style={{color:colors.white, fontSize:textScale(16), }}>{strings.NOTIFICATION}</Text>
      <View style={{marginVertical:moderateScaleVertical(16)}}>
      <FlatList
            data={[1,2,3,4,5,6,7,8,9]}
            showsVerticalScrollIndicator={false}
            renderItem={(element, index) => (
              <View style={styles.notificationContainer}>
                <Image source={imagePath.ironMan} style={styles.userImage}/>
                <View style={{paddingVertical:moderateScaleVertical(16),marginLeft:moderateScale(16), borderBottomWidth:1 , flex:1, borderBottomColor:colors.mediumDarkGray  }}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.userName}>Iron Man </Text>
                  <Text style={{fontSize:textScale(16), color:colors.white}}>{strings.ADD_A_NEW_POST}</Text>
                </View>
                <Text style={{color:colors.textDarkGray, fontSize:textScale(12)}}>20 min ago</Text>
                </View>
              </View>
            )}/>
            </View>
      </View>
    </WrapperContainer>
  )
}

const styles = StyleSheet.create({
container:{
    marginLeft:moderateScale(24),
    marginVertical:moderateScaleVertical(24)
  },
  notificationContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  userName:{
    fontSize:textScale(16),
    color:colors.darkRed
  },
  userImage:{
    width:moderateScale(width/8),
    height:moderateScale(width/8),
    borderRadius:moderateScale(width/16)
  }
})

export default Notification