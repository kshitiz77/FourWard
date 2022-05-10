import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import { openGallery, openCamera } from "../../utils/imagePickerFun";
import actions from "../../redux/actions";

const AddInfo = ({ navigation, route }) => {
  let photo = route?.params?.photo;
  const [selectPhotos, setSelectPhotos] = useState([photo]);
  const [state, setState] = useState({
    description: "",
    location: "",
    imageType: 'image/jpeg',
  });

  const { description, location, imageType } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const _selectPhoto = async () => {
    try {
      const res = await openGallery();
      console.log("image res", res);
      updateState({
        imageType: res?.mime,
      });
      setSelectPhotos(selectPhotos.concat(res.path));
    } catch (error) {
      console.log("error raised", error);
    }
  };

  const _openCamera = async () => {
    try {
      const res = await openCamera();
      console.log("image res", res);
      updateState({
        imageType: res?.mime,
      });
      setSelectPhotos(selectPhotos.concat(res.path));
    } catch (error) {
      console.log("error raised", error);
    }
  };
  const _selectImage = () => {
    if (selectPhotos.length > 3) {
      return alert("You can't upload max five image");
    }
    Alert.alert("Select photo ", "Select Photo ", [
      {
        text: "Open gellery",
        onPress: () => _selectPhoto(),
      },
      {
        text: "Open camera",
        onPress: () => _openCamera(),
      },
      {
        text: "Cancel",
        // style: "cancel",
      },
    ]);
  };

  const _removeImage = (index) => {
    console.log(index);
    const newArr = [...selectPhotos];
    if (index >= 0) {
      newArr.splice(index, 1);
    } else {
      console.log("Image does not exit");
    }

    setSelectPhotos(newArr);
  };

  const _submitPost = async () => {
    console.log(selectPhotos, "selectPhoto >>>>>>");
    let formaData = new FormData();
    formaData.append("description", description);
    formaData.append("location_name", location);
    formaData.append("latitude", 30.7333);
    formaData.append("longitude", 76.7794);
    formaData.append("type", 1);
    if (selectPhotos?.length) {
      selectPhotos.map((i, inx) => {
        formaData.append("images[]", {
          uri: i,
          name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
          type: imageType,
        });
      });
    }
    // formaData.append("image", {
    //   uri: selectPhotos,
    //   name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
    //   type: imageType,
    // });

    console.log(formaData, "formaData");

    actions
      .postSend(formaData, { "Content-Type": "multipart/form-data" })
      .then((res) => {
        console.log("editProfile api res_+++++", res);
        alert(res?.message);
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err, "err");
        alert(err?.message);
      });
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View>
          <HeaderComp
            showTitle={true}
            title={strings.ADD_INFO}
            onPressBack={() => navigation.goBack()}
          />
          <View style={styles.addImageContainer}>
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
                        onPress={() => _removeImage(index)}
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
            placeholder={strings.ADD_LOCATION}
            onChangeText={(text) => updateState({ location: text })}
            dataDetectorTypes="address"
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
