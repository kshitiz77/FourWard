import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import imagePath from "../../constants/imagePath";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import ButtonComp from "../../Components/ButtonComp";
const PostDetails = ({ route, navigation }) => {
  const params = route?.params.postData;
  console.log(params?.userName);
  const {
    userName,
    place,
    caption,
    commentCount,
    likes,
    postTime,
    postImage,
    userImage,
  } = params;

  return (
    <ImageBackground
      source={postImage}
      style={{ height: height, width: width }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Image source={userImage} style={styles.userImage} />
            <View style={{ flex: 0.9, marginLeft: moderateScale(10) }}>
              <Text style={{color:colors.white, fontSize:textScale(16)}}>{userName}</Text>
              <Text style={{color:colors.white, fontSize:textScale(13)}}>{place}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flex: 0.1 }}
            >
              <Image source={imagePath.crossIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            paddingBottom: moderateScaleVertical(15),
          }}
        >
          <Text style={{ fontSize: textScale(13), color: colors.white }}>
            {caption}
          </Text>
          <Text
            style={{
              color: colors.textMediumGray,
              paddingTop: moderateScaleVertical(10),
            }}
          >
            {postTime}
          </Text>
        </View>
        <View style={{ paddingBottom: moderateScaleVertical(50) }}>
          <ButtonComp
            btnText={strings.VIEW_MAP}
            btnStyle={{ backgroundColor: colors.btnOrange , marginHorizontal:moderateScale(24)}}
            btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
            // onPress={_submitEditProfileData}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: moderateScale(width / 10),
    width: moderateScale(width / 10),
    borderRadius: moderateScale(width / 20),
    // marginTop:moderateScale(30)
  },
  container: {
    marginVertical: moderateScaleVertical(50),
    marginHorizontal: moderateScale(15),
    alignItems: "center",
    flex: 1,
  },
});
export default PostDetails;
