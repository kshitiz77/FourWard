import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../styles/responsiveSize";
import colors from "../styles/colors";
import imagePath from "../constants/imagePath";
import strings from "../constants/lang";
import fontFamily from "../styles/fontFamily";
import { isArray } from "lodash";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const Card = ({ onPress, data = {}, _likesOnPost, _openActionSheet }) => {
  const [snapState, setSnapState] = useState(0);
 
  useEffect(() => {
    console.log(data, "cardData____");
  });

  return (
    <>
      <View style={styles.header}>
        <View style={{ flex: 0.2 }}>
          {data?.item?.user?.profile && data?.item?.user?.profile.length ? (
            <Image
              source={{ uri: data?.item?.user?.profile }}
              style={styles.userImage}
            />
          ) : null}
        </View>
        <View style={styles.centerHeaderText}>
          <Text style={styles.userNameText}>
            {data?.item?.user?.first_name} {data?.item?.user?.last_name}
          </Text>
          <Text style={styles.placeName}>{data?.item?.location_name}</Text>
        </View>

        <Menu style={styles.dotsIconStyle}>
          <MenuTrigger>
            <Image source={imagePath.dotsIcon} />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={styles.menuStyle}>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <View style={styles.postContainer}>
        <TouchableOpacity onPress={onPress}>
          {!!(
            data?.item?.images?.file &&
            isArray(data?.item?.images?.file) &&
            data?.item?.images?.file.length
          ) ? (
            <>
              {/* Carousel */}
              <Carousel
                data={data?.item?.images?.file}
                sliderWidth={moderateScale(width - 72)}
                itemWidth={moderateScale(width - 80)}
                scrollEnabled={
                  data?.item?.images?.file.length > 1 ? true : false
                }
                horizontal
                onSnapToItem={(index) => setSnapState(index)}
                renderItem={(i) => {
                  if (i.item != null && typeof i.item != "object") {
                    return (
                      <TouchableOpacity onPress={() => onPress(i.item)}>
                        <Image
                          source={{ uri: i.item }}
                          style={styles.postImage}
                          // resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                    );
                  }
                }}
              />
            </>
          ) : null}
          {/* Pagination dots */}
          <Pagination
            dotsLength={
              // data?.item?.images?.file &&
              // isArray(data?.item?.images?.file) &&
              data?.item?.images?.file.length > 1
                ? data?.item?.images?.file.length
                : 0
            }
            activeDotIndex={snapState}
            containerStyle={{ paddingVertical: moderateScale(0) }}
            dotColor={colors.darkRed}
            dotStyle={{
              width: moderateScale(10),
              height: moderateScale(10),
              borderRadius: moderateScale(20 / 2),
            }}
            inactiveDotStyle={{
              width: moderateScale(20),
              height: moderateScale(20),
              borderRadius: moderateScale(20 / 2),
            }}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            activeOpacity={0.8}
            dotContainerStyle={{ marginHorizontal: moderateScale(2) }}
          />
          {/* : null */}
          {/* }    */}
        </TouchableOpacity>
        <Text style={styles.captionStyle}>{data?.item?.description}</Text>
        <Text style={styles.postTime}>{data?.item?.time_ago}</Text>
        <View style={styles.postBottomView}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={_openActionSheet}>
            <Text style={styles.commentCountStyle}>
              {strings.COMMENTS} {data?.item?.comment_count}
            </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={_likesOnPost}>
              <Text style={styles.likesTextStyle}>
                {strings.LIKES} {data?.item?.like_count}
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
    fontFamily: fontFamily.mulishRegular,
  },
  shareIcon: {
    width: moderateScale(width - width / 1.07),
    resizeMode: "contain",
    marginRight: moderateScale(10),
    height: moderateScale(height - height / 1.03),
  },
  userNameText: {
    color: colors.white,
    fontSize: textScale(16),
    fontFamily: fontFamily.mulishSemiBold,
  },
  placeName: {
    color: colors.textMediumGray,
    fontSize: textScale(13),
    fontFamily: fontFamily.mulishRegular,
  },
  dotsIconStyle: {
    flex: 0.15,
    alignItems: "flex-end",
    marginHorizontal: moderateScale(8),
  },
  captionStyle: {
    color: colors.white,
    fontSize: textScale(14),
    fontFamily: fontFamily.mulishRegular,
  },
  menuStyle:{ 
    marginTop: 15, 
    width:moderateScale(width/4) 
  },
  commentCountStyle: {
    color: colors.white,
    fontSize: textScale(15),
    fontFamily: fontFamily.mulishRegular,
  },
});

export default Card;
