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
import { styles } from "./styles";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
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
            showsVerticalScrollIndicator={false}
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
          <Text style={{ color: colors.white , fontSize:textScale(16)}}>
            {userName}
          </Text>
          <Text style={{ color: colors.textMediumGray, fontSize:textScale(13) }}>{place}</Text>
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
      <Text style={{ color: colors.white, fontSize:textScale(15) }}>{caption}</Text>
      <Text style={styles.postTime}>{postTime}</Text>
      <View style={styles.postBottomView}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: colors.white, fontSize:textScale(15) }}>{strings.COMMENTS} {comments}</Text>
          <Text style={styles.likesTextStyle}>{strings.LIKES} {likes}</Text>
        </View>
        <TouchableOpacity>
        <Image source={imagePath.shareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Home;
