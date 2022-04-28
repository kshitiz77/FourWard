import { View, Text, StyleSheet, Image } from 'react-native'
import React , { useState }from 'react';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale , moderateScaleVertical, width } from '../styles/responsiveSize';

const CountryCodePicker = () => {
    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');
  
    const onSelect = country => {
      setCountryFlag(country.cca2);
      setCountryCode(country.callingCode[0]);
    };
  return (
    <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.mediumDarkGray,
                borderRadius: moderateScale(10),
                paddingHorizontal:moderateScale(5),
                flex: 0.32,
              }}>
              <CountryPicker
                onSelect={onSelect}
                visible={false}
                countryCode={countryFlag}
                withCallingCode={true}
                withCallingCodeButton={countryCode}
                // containerButtonStyle={{color:'red'}}  
                theme={{onBackgroundTextColor:colors?.white,
                backgroundColor:colors?.mediumDarkGray}}         
              />
              <Image
                source={imagePath.downArrow}
                style={{
                  height: moderateScale(width / 24),
                  width: moderateScale(width / 24),
                  resizeMode: 'contain',
                  marginLeft: moderateScaleVertical(5),
                }}
              />
            </View>
  )
}

export default CountryCodePicker