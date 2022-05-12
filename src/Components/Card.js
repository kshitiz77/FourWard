import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../styles/responsiveSize";
import colors from "../styles/colors";
import imagePath from "../constants/imagePath";
import strings from "../constants/lang";
import fontFamily from "../styles/fontFamily";

const Card = ({
  userImage,
  firstName,
  lastName,
  place,
  postImage,
  caption,
  commentCount,
  likes,
  onPress,
  postTime
}) => {
  return (
    <>
      <View style={styles.header}>
        <View style={{ flex: 0.2 }}>
          <Image source={{uri:userImage}}  style={styles.userImage} />
        </View>
        <View style={styles.centerHeaderText}>
          <Text style={styles.userNameText}>
            {firstName} {lastName}
          </Text>
          <Text
            style={styles.placeName}
          >
            {place}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.dotsIconStyle}
        >
          <Image source={imagePath.dotsIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.postContainer}>
        <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri:postImage}}
          style={styles.postImage}
          // resizeMode={"contain"}
        />
        </TouchableOpacity>
        <Text style={styles.captionStyle}>
          {caption}
        </Text>
        <Text style={styles.postTime}>{postTime}</Text>
        <View style={styles.postBottomView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.commentCountStyle}>
              {strings.COMMENTS} {commentCount}
            </Text>
            <Text style={styles.likesTextStyle}>
              {strings.LIKES} {likes}
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={imagePath.shareIcon} style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
  },
  centerHeaderText: {
    flex: 0.75,
    marginLeft: moderateScale(8),
  },
  userImage: {
    width: moderateScale(width / 10),
    height: moderateScale(width / 10),
    borderRadius: moderateScale(width / 20),
    marginHorizontal: moderateScale(8),
  },
  postImage: {
    width: moderateScale(width - 78),
    height: moderateScale(width - 50),
    marginVertical: moderateScaleVertical(16),
    alignSelf: "center",
  },
  postTime: {
    color: colors.textDarkGray_2,
    marginVertical: moderateScaleVertical(8),
    fontSize: moderateScale(13),
  },
  postBottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScaleVertical(8),
  },
  likesTextStyle: {
    color: colors.white,
    marginHorizontal: moderateScale(24),
    fontSize: textScale(15),
    fontFamily:fontFamily.mulishRegular
  },
  shareIcon: {
    width: moderateScale(width - width / 1.07),
    resizeMode: "contain",
    marginRight: moderateScale(10),
    height: moderateScale(height - height / 1.03),
  },
  userNameText:{ 
    color: colors.white, 
    fontSize: textScale(16),
    fontFamily:fontFamily.mulishSemiBold
  },
  placeName:{
    color: colors.textMediumGray,
    fontSize: textScale(13),
    fontFamily:fontFamily.mulishRegular
  },
  dotsIconStyle:{ 
    flex: 0.05, 
    marginHorizontal: moderateScale(8)
  },
  captionStyle:{ 
    color: colors.white, 
    fontSize: textScale(14),
    fontFamily:fontFamily.mulishRegular
  },
  commentCountStyle:{ 
    color: colors.white, 
    fontSize: textScale(15),
    fontFamily:fontFamily.mulishRegular
  }
});

export default Card;
