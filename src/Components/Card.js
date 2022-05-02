import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../styles/responsiveSize";
import colors from "../styles/colors";
import imagePath from "../constants/imagePath";
import strings from "../constants/lang";

const Card = ({
  userImage,
  userName,
  place,
  postImage,
  caption,
  commentCount,
  likes,
}) => {
  return (
    <>
      <View style={styles.header}>
        <View style={{ flex: 0.2 }}>
          <Image source={userImage} style={styles.userImage} />
        </View>
        <View style={styles.centerHeaderText}>
          <Text style={{ color: colors.white, fontSize: textScale(16) }}>
            {userName}
          </Text>
          <Text
            style={{
              color: colors.textMediumGray,
              fontSize: textScale(13),
            }}
          >
            {place}
          </Text>
        </View>
        <TouchableOpacity
          style={{ flex: 0.05, marginHorizontal: moderateScale(8) }}
        >
          <Image source={imagePath.dotsIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.postContainer}>
        <Image
          source={postImage}
          style={styles.postImage}
          resizeMode={"contain"}
        />
        <Text style={{ color: colors.white, fontSize: textScale(14) }}>
          {caption}
        </Text>
        <Text style={styles.postTime}>{}</Text>
        <View style={styles.postBottomView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: colors.white, fontSize: textScale(15) }}>
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
    resizeMode: "contain",
    marginHorizontal: moderateScale(8),
  },
  postImage: {
    width: moderateScale(width - 68),
    height: moderateScale(width - 48),
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
  },
  shareIcon: {
    width: moderateScale(width - width / 1.07),
    resizeMode: "contain",
    marginRight: moderateScale(10),
    height: moderateScale(height - height / 1.03),
  },
});

export default Card;
