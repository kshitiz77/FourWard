import React, { useEffect, useState } from "react";
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
import navigationStrings from "../../navigation/navigationStrings";
import actions from "../../redux/actions";

const Home = ({ navigation }) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const _postDetails = (item) => {
    console.log(item);
    navigation.navigate(navigationStrings.POST_DETAILS, { postData: item });
  };

  const renderItem = (element, index) => {
    console.log(element.item, "Render Item");
    return (
      <View key={index} style={styles.flatlistContainer}>
        <Card data={element} onPress={() => _postDetails(element.item)} />
      </View>
    );
  };

  useEffect(() => {
    const apiData = `?skip=${count}`;
    setLoading(!loading);
    actions.getPost(apiData).then((res) => {
        console.log(res.data, "getPost");
        setLoading(loading);
        setPost(res.data);
    })
  }, [count]);
  return (
    <WrapperContainer isLoading={loading} withModal={loading}>
      <View style={{ marginHorizontal: moderateScale(24) }}>
        <View style={styles.headerStyle}>
          <Image source={imagePath.homeLogo} />
          <Image source={imagePath.locationIcon} />
        </View>
        <View>
          <FlatList
            data={post}
            contentContainerStyle={{
              paddingBottom: moderateScaleVertical(187),
            }}
            showsVerticalScrollIndicator={false}
            renderItem={(element, index) => renderItem(element, index)}
            keyExtractor={(item) => item.id}
            onEndReached={({ distanceFromEnd }) => {
              if (count >= 0) {
                console.log("count>>>>>>>", count);
                setCount(count + 1);
              }
            }}
            // onRefresh=
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Home;
