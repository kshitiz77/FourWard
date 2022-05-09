import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HeaderComp from "../../Components/HeaderComp";
import strings from "../../constants/lang";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import { styles } from "./styles";
import ButtonComp from "../../Components/ButtonComp";
import TextInputWithLable from "../../Components/TextInputWithLable";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import { openGallery } from "../../utils/imagePickerFun";

const AddInfo = ({ navigation, route }) => {
 const photo = route?.params?.photo
 const [selectPhotos, setSelectPhotos] = useState([])
 console.log(selectPhotos)

 const _selectProfileImage = async () => {
  try {
    const res = await openGallery();
    console.log("image res", res);
    setSelectPhotos(selectPhotos.concat(res.path))
  } catch (error) {
    console.log("error raised", error);
  }
};

  return (
    <WrapperContainer>
      <View
        style={styles.container}
      >
        <View>
          <HeaderComp
            showTitle={true}
            title={strings.ADD_INFO}
            // onPressBack={() => navigation.goBack()}
          />
          <View
            style={styles.addImageContainer}
          >
            {
              photo ?
              <Image
                source={{uri:photo}}
                style={styles.selectImgStyle}
                resizeMode="contain"
              />
                : null
            }
            {
              selectPhotos ?
              selectPhotos.map((element,index)=>{
                return(
                  <Image
                source={{uri:element}}
                style={styles.selectImgStyle}
                resizeMode="contain"
              />
                )
              })
              :null
            }
            <TouchableOpacity
              style={styles.addmorePostStyle}
              onPress={_selectProfileImage}
            >
              <Image source={imagePath.plusIcon} />
            </TouchableOpacity>
          </View>
          <TextInputWithLable
            multiline={true}
            // numberOfLines={10}
            inputStyle={styles.descriptionInputStyle}
            // textAlign={'center'}
            placeholder={strings.WRITE_DESCRIPTION_HERE}
          />
          <TextInputWithLable
            inputStyle={{ paddingHorizontal: moderateScale(16) }}
            placeholder={strings.ADD_LOCATION}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.POST}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={styles.btnStyle}
              // onPress={}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};



export default AddInfo;
