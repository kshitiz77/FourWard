import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import strings from '../../constants/lang'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale, moderateScaleVertical, textScale,  } from '../../styles/responsiveSize'
import ButtonComp from '../../Components/ButtonComp'
import colors from '../../styles/colors'
import { useSelector } from 'react-redux'
import { apiPost } from '../../utils/utils'
import { CHANGE_PASSWORD } from '../../config/urls'
import { NavigationContainer } from '@react-navigation/native'

const ChangePassword = ({navigation}) => {
  const userData = useSelector((state) => state?.userData?.userData);
  console.log("userData", userData);
  const [isVisible, setIsVisible] = useState();
  const [state, setState] = useState({
    password: "",
    confirmPassword:""
  })
  const {password, confirmPassword} = state

  const updateState = (data) =>
    setState((state) => ({ ...state, ...data }));

  const handleChangePassword = async () =>{
    let apiData = {
      user_id : userData.id,
      password : password,
  }
    apiPost(CHANGE_PASSWORD, apiData).then(res=>{
      alert("Change password sucessfully !", res)
      navigation.goBack()
    }).catch(error=>{
      alert("error raised!", error)
    })
  }
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
              value={confirmPassword}
              inputStyle={{ marginVertical: moderateScaleVertical(16) }}
              secureTextEntry={isVisible}
              rightText={isVisible ? "Show" : "Hide"}
              onPressRight={() => setIsVisible(!isVisible)}
              onChangeText={(text) => updateState({ confirmPassword: text })}
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
              onPress={handleChangePassword}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  )
}

export default ChangePassword