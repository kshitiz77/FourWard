import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Card from "../../Components/Card";
import WrapperContainer from "../../Components/WrapperContainer";
import { posts } from "../../constants/data/posts";
import imagePath from "../../constants/imagePath";
import strings from "../../constants/lang";
import colors from "../../styles/colors";
import { styles } from "./styles";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

const Home = () => {
  return (
    <WrapperContainer>
      <View style={{ marginHorizontal: moderateScale(24) }}>
        <View style={styles.headerStyle}>
          <Image source={imagePath.homeLogo} />
          <Image source={imagePath.locationIcon} />
        </View>
        <View style={{ marginBottom: moderateScaleVertical(187) }}>
          <FlatList
            data={posts}
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
