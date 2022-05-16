import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../styles/responsiveSize";
import colors from "../styles/colors";
import imagePath from "../constants/imagePath";
import strings from "../constants/lang";
import fontFamily from "../styles/fontFamily";
import {isArray} from 'lodash'
const Card = ({
  onPress,
  data ={},
  _likesOnPost
}) => {
  console.log(data?.item?.images?.file[0], "post image")
  return (
    <>
      <View style={styles.header}>
        <View style={{ flex: 0.2 }}>
          <Image source={{uri:data?.item?.user?.profile}}  style={styles.userImage} />
        </View>
        <View style={styles.centerHeaderText}>
          <Text style={styles.userNameText}>
            {data?.item?.user?.first_name} {data?.item?.user?.last_name}
          </Text>
          <Text
            style={styles.placeName}
          >
            {data?.item?.location_name}
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
        {/* <Image
          source={{uri:data?.item?.images?.file[0]}}
          style={styles.postImage}
          resizeMode={'contain'}
        /> */}
        {data?.item?.images?.file &&
        isArray(data?.item?.images?.file) &&
        data?.item?.images?.file.length
          ? data?.item?.images?.file.map((i, inx) => {
              if (i != '' && i != null) {
                return (
                  <Image
                    source={{uri: i}}
                    style={styles.postImage}
                    resizeMode={'contain'}
                    key={inx}
                  />
                );
              } else {
                return null;
              }
            })
          : null}
        </TouchableOpacity>
        <Text style={styles.captionStyle}>
          {data?.item?.description}
        </Text>
        <Text style={styles.postTime}>{data?.item?.time_ago}</Text>
        <View style={styles.postBottomView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.commentCountStyle}>
              {strings.COMMENTS} {data?.item?.commets.length}
            </Text>
            <TouchableOpacity onPress={_likesOnPost}>
            <Text style={styles.likesTextStyle}>
              {strings.LIKES} {data?.item?.like_count }
            </Text>
            </TouchableOpacity>
            
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
