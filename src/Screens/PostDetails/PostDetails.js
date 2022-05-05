import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import imagePath from '../../constants/imagePath'
import { height, moderateScale, width } from '../../styles/responsiveSize'

const PostDetails = ({route}) => {
  const params = route?.params?.postData;

  const {userName, place, caption, commentCount, likes, postTime} = params

  return (
    <ImageBackground source={{uri:"https://wallpaperaccess.com/full/2986767.jpg"}} style={{width:moderateScale(width), height:moderateScale(height)}}>
    </ImageBackground>
  )
}

export default PostDetails