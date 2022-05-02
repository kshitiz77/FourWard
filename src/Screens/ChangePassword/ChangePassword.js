import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import strings from '../../constants/lang'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale, moderateScaleVertical, textScale,  } from '../../styles/responsiveSize'
import ButtonComp from '../../Components/ButtonComp'
import colors from '../../styles/colors'

const ChangePassword = () => {
  const [isVisible, setIsVisible] = useState();
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword:""
  })
  const {password, confirmPassword} = userData

  const updateState = (data) =>
    setUserData((userData) => ({ ...userData, ...data }));
  return (
    <WrapperContainer>
      <View style={{marginHorizontal:moderateScale(24), justifyContent:'space-between', flex:1}}>
      <View >
      <HeaderComp showTitle={true} title={strings.CHANGE_PASSWORD}/>
      <View style={{marginTop: moderateScaleVertical(42)}}>
      <TextInputWithLable
              placeholder={strings.PASSWORD}
              value={password}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ password: text })}
            />
           <TextInputWithLable
              placeholder={strings.CONFIRM_PASSWORD}
              value={password}
              inputStyle={{ marginVertical: moderateScaleVertical(16) }}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ password: text })}
            />
      </View>
      </View>
      <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56), }}>
            <ButtonComp
              btnText={strings.SAVE}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
              onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  )
}

export default ChangePassword