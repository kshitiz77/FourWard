import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import actions from "../../redux/actions";
import imagePath from "../../constants/imagePath";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from "../../styles/responsiveSize";
import { posts } from "../../constants/data/posts";
import colors from "../../styles/colors";
import strings from "../../constants/lang";

const Home = () => {
  return (
    <WrapperContainer>
      <View style={{ marginHorizontal: moderateScale(24), }}>
        <View style={styles.headerStyle}>
          <Image source={imagePath.homeLogo} />
          <Image source={imagePath.locationIcon} />
        </View>
        <View style={{ paddingBottom: moderateScaleVertical(206) }}>
          <FlatList
            data={posts}
            renderItem={(element, index) => (
              <View key={index} style={styles.flatlistContainer}>
                <PostHeader userName={element.item.userName} userImg={element.item.userImage} place={element.item.place} />
                <PostBody comments={element.item.commentCount} likes={element.item.likes} postImage={element.item.postImage} caption={element.item.caption} postTime={element.item.postTime} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};


const PostHeader = ({ userName, userImg, place }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={userImg} style={styles.userImage} />
        <View style={styles.centerHeaderText}>
          <Text style={{ color: colors.white }}>
            {userName}
          </Text>
          <Text style={{ color: colors.textMediumGray }}>{place}</Text>
        </View>
      </View>
      <TouchableOpacity style={{ justifyContent: 'flex-end', marginHorizontal: moderateScale(8) }}>
        <Image source={imagePath.dotsIcon} />
      </TouchableOpacity>
    </View>
  )
}

const PostBody = ({ postImage, caption, postTime, comments, likes }) => {
  return (
    <View style={styles.postContainer}>
      <Image source={postImage} style={styles.postImage} />
      <Text style={{ color: colors.white }}>{caption}</Text>
      <Text style={{ color: colors.textDarkGray_2, marginVertical: moderateScaleVertical(8) }}>{postTime}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:moderateScaleVertical(8) }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: colors.white }}>{strings.COMMENTS} {comments}</Text>
          <Text style={{ color: colors.white, marginHorizontal: moderateScale(24) }}>{strings.LIKES} {likes}</Text>
        </View>
        <TouchableOpacity>
        <Image source={imagePath.shareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: moderateScaleVertical(24),
  },
  flatlistContainer: {
    backgroundColor: colors.mediumDarkGray,
    marginBottom: moderateScaleVertical(28),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScaleVertical(16),
    borderRadius: moderateScale(8),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userImage: {
    width: moderateScale(width - width / 1.1),
    height: moderateScale(height - height / 1.05),
    borderRadius: moderateScale(width - width / 1.05),
    resizeMode: 'contain',
    marginHorizontal: moderateScale(8)
  },
  postImage: {
    width: moderateScale(width - width / 6.5),
    height: moderateScale(height - height / 1.7),
    resizeMode: 'contain',
    marginVertical: moderateScaleVertical(16),
    alignSelf: 'center'
  },
  shareIcon: {
    width: moderateScale(width - width / 1.07), 
    resizeMode: "contain", 
    marginRight: moderateScale(10),
    height: moderateScale(height - height / 1.03)
  }
});

export default Home;
