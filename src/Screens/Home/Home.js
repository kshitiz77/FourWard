import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Card from "../../Components/Card";
import WrapperContainer from "../../Components/WrapperContainer";
import { posts } from "../../constants/data/posts";
import imagePath from "../../constants/imagePath";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import { styles } from "./styles";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../styles/responsiveSize";
import PostDetails from "../PostDetails/PostDetails";
import navigationStrings from '../../navigation/navigationStrings'

const Home = ({navigation}) => {
  const _postDetails = (item) => {
    console.log(item)
    navigation.navigate(navigationStrings.POST_DETAILS, {postData:item})
  };
  return (
    <WrapperContainer>
      <View style={{ marginHorizontal: moderateScale(24) }}>
        <View style={styles.headerStyle}>
          <Image source={imagePath.homeLogo} />
          <Image source={imagePath.locationIcon} />
        </View>
        <View>
          <FlatList
            data={posts}
            contentContainerStyle={{
              paddingBottom: moderateScaleVertical(187),
            }}
            showsVerticalScrollIndicator={false}
            renderItem={(element, index) => (
              <View key={index} style={styles.flatlistContainer}>
                <Card
                  userImage={element.item.userImage}
                  userName={element.item.userName}
                  place={element.item.place}
                  postImage={element.item.postImage}
                  caption={element.item.caption}
                  postTime={element.item.postTime}
                  commentCount={element.item.commentCount}
                  likes={element.item.likes}
                  onPress={() =>
                    _postDetails(
                      element.item
                    )
                  }
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Home;
