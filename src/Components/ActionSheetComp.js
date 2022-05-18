import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import TextInputWithLable from "../Components/TextInputWithLable";
import ButtonComp from "../Components/ButtonComp";
import colors from "../styles/colors";
import actions from "../redux/actions";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../styles/responsiveSize";
import fontFamily from "../styles/fontFamily";
import strings from "../constants/lang";

const ActionSheetComp = ({ addComment }) => {
  const [data, setData] = useState();
  const [comment, setComment] = useState();
  const [count, setCount] = useState(0);
  const [allComments, setAllComments] = useState(0);
  const state = { data, comment };
  console.log("state-------------", state);
  console.log("data", data);

  useEffect(() => {
    if (data) {
      getAllComment();
    }
  }, [data]);

  const getAllComment = () => {
    let apiData = `?post_id=${data.value.item.id}&skip=${count}`;
    actions
      .getComment(apiData)
      .then((res) => {
        console.log(res, "get comment response--------------");
        setAllComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ActionSheet id="title" onBeforeShow={(data) => setData(data)}>
      {data ? (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={{ flex: 0.7 }}>
              <TextInputWithLable
                placeholder={strings.ADD_COMMENT}
                onChangeText={(data) => setComment(data)}
                value={comment}
              />
            </View>
            <View style={{ flex: 0.05 }} />
            <View style={{ flex: 0.25 }}>
              <ButtonComp
                title="Send"
                btnStyle={{ backgroundColor: colors.btnOrange }}
                btnText="Add"
                btnTextStyle={styles.btnStyle}
                onPress={() => addComment(state)}
              />
            </View>
          </View>
          {data.value.item.commets ? (
            <FlatList
              data={allComments}
              onEndReached={() => {
                console.log(count);
                setCount(count + 3);
              }}
              onEndReachedThreshold={0.9}
              renderItem={(element) => {
                console.log("element", element);
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: moderateScaleVertical(10),
                      alignItems:'center'
                    }}
                  >
                    <View style={{flex:0.1}}>
                    <Image
                      source={{ uri: element.item.user.profile }}
                      style={{
                        width: moderateScale(width / 10),
                        height: moderateScale(width / 10),
                        borderRadius: moderateScale(width / 20),
                      }}
                    />
                    </View>
                    <View style={{flex:0.9 , marginHorizontal:moderateScale(15)}}>
                      <Text style={{ fontFamily:fontFamily.mulishBold}}>
                        {element.item.user.first_name}{" "}
                        {element.item.user.last_name} 
                      </Text>
                      <Text>{element.item.comment} </Text>
                      </View>
                  </View>
                );
              }}
            />
          ) : null}
        </View>
      ) : null}
    </ActionSheet>
  );
};
const styles = StyleSheet.create({
  container: {
    height:height/2,
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScaleVertical(24),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnStyle: {
    color: colors.white,
    fontFamily: fontFamily.mulishBold,
    fontSize: textScale(14),
  },
});
export default ActionSheetComp;
