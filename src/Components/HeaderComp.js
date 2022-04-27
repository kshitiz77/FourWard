//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import imagePath from '../constants/imagePath';
import { moderateScale } from '../styles/responsiveSize';

const HeaderComp = ({
    onPressBack
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
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        height: moderateScale(42)
    },
});

//make this component available to the app
export default HeaderComp;
