import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
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
import { openCamera } from "react-native-image-crop-picker";

const AddInfo = ({ navigation, route }) => {
  const photo = route?.params?.photo;
  const [selectPhotos, setSelectPhotos] = useState([]);
  const [state, setState] = useState({
    description: '',
    location:''
  })


  const updateState = (data) => setState((state)=> ({...state, ...data}))

  const _selectImage = () => {
    Alert.alert(
      "Select photo",
      [
        {
          text: "Open gellery",
          onPress: async() =>{  try {
              const res = await openGallery();
              console.log("image res", res);
              setSelectPhotos(selectPhotos.concat(res.path));
            } catch (error) {
              console.log("error raised", error);
            }
          }
        },
        {
          text: "Open camera",
          onPress: async() =>{  try {
              const res = await openCamera();
              console.log("image res", res);
              setSelectPhotos(selectPhotos.concat(res.path));
            } catch (error) {
              console.log("error raised", error);
            }
          }
        },
      ],
    )
    // try {
    //   const res = await openGallery();
    //   console.log("image res", res);
    //   setSelectPhotos(selectPhotos.concat(res.path));
    // } catch (error) {
    //   console.log("error raised", error);
    // }
  };

  const _removeImage = (index) =>{
    console.log(index)
    const newArr = [...selectPhotos];
    if(index >= 0){
      newArr.splice(index, 1);
    }else{
      console.log("Image does not exit");
    }

    setSelectPhotos(newArr)
  }

  const _submitPost = () =>{
    console.log(state, "post details")
  }
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp
            showTitle={true}
            title={strings.ADD_INFO}
            // onPressBack={() => navigation.goBack()}
          />
          <View style={styles.addImageContainer}>
            {photo ? (
              <Image
                source={{ uri: photo }}
                style={styles.selectImgStyle}
                resizeMode="cover"
              />
            ) : null}
            {selectPhotos
              ? selectPhotos.map((element, index) => {
                  return (
                    <View>
                      <Image
                        source={{ uri: element }}
                        style={styles.selectImgStyle}
                        resizeMode="cover"
                      />
                      <TouchableOpacity
                        style={styles.removeBtnStyle}
                        onPress={() =>_removeImage(index)}
                      >
                        <Image
                          source={imagePath.removeIcon}
                          style={{
                            width: moderateScale(width / 18),
                            height: moderateScale(width / 18),
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
            <TouchableOpacity
              style={styles.addmorePostStyle}
              onPress={_selectImage}
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
            onChangeText={(text) => updateState({ description: text })}
          />
          <TextInputWithLable
            inputStyle={{ paddingHorizontal: moderateScale(16) }}
            placeholder={strings.ADD_LOCATION}
            onChangeText={(text) => updateState({ location: text })}
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
              onPress={_submitPost}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};

export default AddInfo;
