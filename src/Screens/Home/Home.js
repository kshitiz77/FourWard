import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import Card from "../../Components/Card";
import WrapperContainer from "../../Components/WrapperContainer";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../navigation/navigationStrings";
import actions from "../../redux/actions";
import {
  moderateScale,
  moderateScaleVertical,
} from "../../styles/responsiveSize";
import { styles } from "./styles";
import { cloneDeep } from "lodash";
import ActionSheetComp from "../../Components/ActionSheetComp";
import {SheetManager} from 'react-native-actions-sheet';

const Home = ({ navigation }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [like, setLike] = useState(0);
  // const [postData, setPostData] = useState([])

  const _postDetails = (item, image) => {
    console.log(image, "postImage");
    console.log(item, "item");
    navigation.navigate(navigationStrings.POST_DETAILS, {
      postData: item,
      postImage: image,
    });
  };
  const _likesOnPost = (element) => {
    let id = element.item.id;
    console.log("previous status", element.item.like_status);
    let updateLikeStatus = Number(element.item.like_status) ? 0 : 1;
    console.log("like status", updateLikeStatus);
    let apiData = `?post_id=${id}&status=${updateLikeStatus}`;

    actions
      .likePost(apiData)
      .then((res) => {
        console.log("getLikes response", res);

        let newArray = cloneDeep(post);
        newArray = newArray.map((i, inx) => {
          if (i?.id == id) {
            i.like_count = updateLikeStatus
              ? Number(i.like_count) + 1
              : Number(i.like_count) - 1;
            i.like_status = updateLikeStatus;
            console.log(i, "after update");
            return i;
          } else {
            return i;
          }
        });
        console.log(newArray, "newArray");
        setPost(newArray);
      })
      .catch((err) => {
        alert(err?.message);
      });
  };
  const renderItem = (element, index) => {
    console.log(element, "Render Item");
    return (
      <View key={index} style={styles.flatlistContainer}>
        <Card
          data={element}
          onPress={(image) => _postDetails(element.item, image)}
          _likesOnPost={() => _likesOnPost(element)}
          _openActionSheet={() => _openActionSheet(element)}
        />
      </View>
    );
  };

  useEffect(() => {
    if (loading || refresh) {
      const apiData = `?skip=${count}`;
      actions
        .getPost(apiData)
        .then((res) => {
          console.log(res, "getPost");
          setLoading(false);
          setRefresh(false);
          if (refresh) {
            setPost(res?.data);
          } else {
            setPost([...post, ...res.data]);
          }
          console.log("post______", post);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
  }, [loading, refresh]);

  // const fetchData = () =>{
  //   setCount(count-8);
  //   setLoading(true)
  //   setRefresh(false)
  // }
  const onRefresh = () => {
    setCount(0);
    setRefresh(true);
  };
  const _openActionSheet = (element) => {
    // let id = element.item.id;
    // console.log("id++++++++++++++++", id);
    SheetManager.show("title", { value: element });
  };

  const _addComment = data => {
    console.log('data-----------', data);
    let apiData = `?post_id=${data.data.value.item.id}&comment=${data.comment}`;
    console.log('apidata', apiData);
    actions
      .addComments(apiData)
      .then(res => {
        console.log('add comments', res);
        alert('add');
      })
      .catch(err => {
        alert(err?.message);
      });
  };
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
            onScrollToTop={false}
            onEndReached={({ distanceFromEnd }) => {
              console.log("count>>>>>>>", count);
              setLoading(true);
              setCount(count + 8);
            }}
            refreshing={refresh}
            onRefresh={onRefresh}
          />
        </View>
      </View>
      <ActionSheetComp addComment={data => _addComment(data)} />
    </WrapperContainer>
  );
};

export default Home;
