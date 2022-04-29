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
  moderateScale,
  moderateScaleVertical,
} from "../../styles/responsiveSize";
import { posts } from "../../constants/data/posts";

const Home = () => {
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
            renderItem={(element, index) => (
              <View key={index} style={styles.flatlistContainer}>
                <PostHeader userImg={element.item.userImg}/>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};


const PostHeader = ({userImg}) =>{
    return(
      <View style={styles.header}>
        <Image source={userImg}/>
      </View>
    )
}
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScaleVertical(3),
  },
});

export default Home;
