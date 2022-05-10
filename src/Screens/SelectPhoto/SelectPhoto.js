import {
  View,
  Text,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CameraRoll from "@react-native-community/cameraroll";
import WrapperContainer from "../../Components/WrapperContainer";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../navigation/navigationStrings";
import { openCamera } from "../../utils/imagePickerFun";
import HeaderComp from "../../Components/HeaderComp";
const SelectPhoto = ({ navigation }) => {
  const [state, setState] = useState();
  const [selectImage, setSelectImage] = useState()
  useEffect(() => {
    _getMediaFromGalary();
    console.log(state);
  }, []);
  /********Check for android permission */
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  /***********Get media from gallery */
  const _getMediaFromGalary = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.getPhotos({
      first: 5000,
      assetType: "Photos",
    })
      .then((r) => {
        setState({ photos: r.edges });
        // setSelectImage(r.)
        console.log(r.edges[0].node.image.uri, "selectImage");
        setSelectImage(r.edges[0].node.image.uri)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _goToAddInfo = () => {
    navigation.navigate(navigationStrings.ADD_INFO, {
      photo: selectImage,
    });
  };

  const _selectImgFun = (element) =>{
    setSelectImage(element.item.node.image.uri)
  }

  const _selectImageFromCamera = async() =>{
    try {
      const res = await openCamera();
      console.log("image res", res);
      setSelectImage(res.path)
    } catch (error) {
      console.log("error raised", error);
    }
  }
  const renderItem = (element, index) => {
    // console.log(element);
    return (
      <>
        <TouchableOpacity onPress={() => _selectImgFun(element)}>
          <Image
            key={index}
            style={{
              width: width / 3,
              height: width / 3,
              resizeMode: "cover",
              flexDirection: "row",
              //  flexWrap:'wrap'
            }}
            source={{ uri: element.item.node.image.uri }}
          />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <WrapperContainer>
      {/* <ScrollView> */}
      <View style={{marginHorizontal:moderateScale(24)}}>
      <HeaderComp
            showTitle={true}
            title={strings.SELECT_PHOTO}
            onPressBack={() => navigation.goBack()}
            rightIcon={imagePath.checkIcon}
            showRightIcon={true}
            onPress={_goToAddInfo}
          />
      </View>
      <View style={{flex:1}}>
        <View style={{flex:0.4}}>
          <Image source={{uri:selectImage}} style={{ height:moderateScale(width/1.2)}}/>
        </View>
        <View style={{flex:0.6}}>
      <View style={styles.galleryHeaderStyle}>
        <Text style={styles.galleryHeaderLeftTextStyle}>{strings.GALLERY}</Text>
        <View style={styles.galleryHeaderRightContainer}>
          <Text style={styles.galleryHeaderRightTextStyle}>
            {strings.RECENTS}
          </Text>
          <Image
            source={imagePath.downArrow}
            style={{ marginLeft: moderateScale(3) }}
          />
        </View>
      </View>
      <FlatList
        data={state?.photos}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={(element, index) => renderItem(element, index)}
        ListFooterComponent={<View style={{ height: moderateScale(100) }} />}
      />
      {/* </ScrollView> */}
      <TouchableOpacity style={styles.cameraIconContainer} onPress={_selectImageFromCamera}>

        <Image source={imagePath.cameraIcon} style={styles.cameraIconStyle}/>
      </TouchableOpacity>
      </View>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  selectPhotoText: {
    fontSize: textScale(16),
    color: colors.white,
    marginLeft: moderateScale(24),
    marginVertical: moderateScale(24),
  },
  galleryHeaderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(24),
    backgroundColor: colors.mediumDarkGray,
    paddingVertical: moderateScaleVertical(16),
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
  },
  galleryHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  galleryHeaderLeftTextStyle: {
    color: colors.white,
    fontSize: textScale(16),
  },
  galleryHeaderRightTextStyle: {
    color: colors.white,
    fontSize: textScale(14),
  },
  cameraIconContainer:{
    position:'absolute', 
    bottom:moderateScale(80), 
    right:moderateScale(20),
  },
  cameraIconStyle:{
    width:moderateScale(width/6), 
    height:moderateScale(width/6)}
});

export default SelectPhoto;
