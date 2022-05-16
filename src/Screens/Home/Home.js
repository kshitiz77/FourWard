import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import Card from "../../Components/Card";
import WrapperContainer from "../../Components/WrapperContainer";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../navigation/navigationStrings";
import actions from "../../redux/actions";
import {
  moderateScale,
  moderateScaleVertical
} from "../../styles/responsiveSize";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false) 
  const [like, setLike] = useState(0)
  // const [postData, setPostData] = useState([])

  const _postDetails = (item) => {
    console.log(item, "item");
    navigation.navigate(navigationStrings.POST_DETAILS, { postData: item });
  };
  const _likesOnPost = (element) =>{
    console.log(element.id, "id__________")
    const id = element.id
    console.log(like, 'Like count')
    if(like === 0){
      setLike(like+1)
    }else{
      setLike(like-1)
    }
    const apiData = `?post_id=${id}&status=${like}`;
    console.log(apiData,"apidata")
    actions.likePost(apiData).then((res) => {
      console.log(res, "likePost____");
      setLoading(loading);
  }).catch((error)=>{
    console.log(error, "error")
  })
  }
  const renderItem = (element, index) => {
    console.log(element.item, "Render Item");
    return (
      <View key={index} style={styles.flatlistContainer}>
        <Card data={element} onPress={() => _postDetails(element.item)} _likesOnPost={()=>_likesOnPost(element.item)}/>
      </View>
    );
  };

  useEffect(() => {
    const apiData = `?skip=${count}`;
    setLoading(!loading);
    actions.getPost(apiData).then((res) => {
        console.log(res.data, "getPost");
        setLoading(loading);
      setPost([...post, ...res.data])  
      console.log("post______", post)
    }).catch((error)=>{
      alert(error)
      setLoading(false)
    })
  }, [count, like]);

  const fetchData = () =>{

    setCount(count-8);
    setRefresh(false)
  }
  const onRefresh = () =>{
    setRefresh(true);
    fetchData()
    console.log(count, 'count')
  }
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
              paddingBottom: moderateScaleVertical(196),
            }}
            showsVerticalScrollIndicator={false}
            renderItem={(element, index) => renderItem(element, index)}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => {
                console.log("count>>>>>>>", count);
                setCount(count + 8);
            }}
            refreshing={refresh}
            onRefresh={onRefresh}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Home;
