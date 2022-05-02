//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';

const HeaderComp = ({
    onPressBack,
    showTitle,
    title
  }) => {
    const navigation = useNavigation();
  
    const goBack = () => {
      navigation.goBack()
    }
    return (
      <View style={styles.container}>
  
        <TouchableOpacity onPress={onPressBack ? onPressBack : () => goBack()}>
          <Image source={imagePath.back} />

        </TouchableOpacity>
        {
          showTitle ? <Text style={{color:colors.white, fontSize:textScale(16), marginLeft:moderateScale(16)}}>{title}</Text> : null
        }
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        height: moderateScale(42),
    },
});

//make this component available to the app
export default HeaderComp;
