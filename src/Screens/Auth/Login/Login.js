import { View, Text, StyleSheet, Image } from "react-native";
import React, {useState} from "react";
import WrapperContainer from "../../../Components/WrapperContainer";
import HeaderComp from "../../../Components/HeaderComp";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../../styles/responsiveSize";
import strings from '../../../constants/lang'
import colors from "../../../styles/colors";
import TextInputWithLable from "../../../Components/TextInputWithLable";
import CountryPicker, {Flag} from 'react-native-country-picker-modal'
import { TouchableOpacity } from "react-native-gesture-handler";
import imagePath from "../../../constants/imagePath";

const Login = () => {
  const [countryCode, setCountryCode] = useState('+91')
  const [countryFlag, setCountryFlag] = useState('IN')
  const [isCountrySelected, setCountrySelected] = useState(true)
  const [isVisible, setIsVisible] = useState()
  const [userData, setUserData] = useState({
      phone: '',
      password: ''
  })

  const {phone, password} = userData

  const onSelect = (country) =>{
    console.log("country", country)
    console.log("country.cca2", country.cca2)
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0])
    setCountrySelected(false)
  }
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp />
      <View style={{marginTop:moderateScaleVertical(6)}}>
        <Text style={styles.welcomeBackStyle}>{strings.WELCOME_BACK}</Text>
        <Text style={styles.welcomeTextStyle}>{strings.WELCOME_TEXT}</Text>
      </View>
      <View style={{marginTop:moderateScaleVertical(32)}}>
        <View style={{flexDirection:'row'}}>
        
        
       { isCountrySelected && <CountryPicker onSelect={onSelect} />}
         <View style={styles.countryCodePicker}>
       <TouchableOpacity onPress={()=>setCountrySelected(true)} style={{flexDirection:'row', alignItems:'center'}}>
          <Flag countryCode={countryFlag} flagSize={15} />
          <Text style={{color:colors.white, marginRight:moderateScale(4)}}> + {countryCode}</Text>
          <Image source={imagePath.downArrow}/>
       </TouchableOpacity>
          </View>
       <View style={{flex:0.05}}/>
        <TextInputWithLable placeholder={strings.MOBILE_NUMBER} inputStyle={{flex:0.65}}/>
        </View>
        <TextInputWithLable
                        placeholder={strings.ENTER_YOUR_PASSWORD}
                        label={strings.PASSWORD}
                        value={password}
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setIsVisible(!isVisible)}
                        onChangeText={(text) => updateState({ password: text })}
                    />
      </View>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(24),

  },
  welcomeBackStyle:{
    fontSize:textScale(24),
    color:colors.white
  },
  welcomeTextStyle:{
    fontSize:textScale(15),
    color:colors.textGray,
    marginTop:moderateScaleVertical(6)
  },
  countryCodePicker:{
    flex:0.3,
    alignItems:'center',
    paddingVertical:moderateScaleVertical(15),
    borderRadius:moderateScale(8),
    flexDirection:'row',
    backgroundColor:colors.mediumDarkGray
  }
});

export default Login;
