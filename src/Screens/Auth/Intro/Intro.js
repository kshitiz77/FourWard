import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import imagePath from "../../../constants/imagePath";
import AppIntroSlider from "react-native-app-intro-slider";
import { moderateScale, moderateScaleVertical, textScale } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";
import WrapperContainer from "../../../Components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";

const introSlides = [
  {
    key: 1,
    title: strings.INTRO_TITLE_1,
    text: strings.INTRO_TEXT_1,
    image: imagePath.introImg,
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: strings.INTRO_TITLE_2,
    text: strings.INTRO_TEXT_2,
    image: imagePath.introImg,
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: strings.INTRO_TITLE_3,
    text: strings.INTRO_TEXT_3,
    image: imagePath.introImg,
    backgroundColor: "#22bcb5",
  },
];



const Intro = ({navigation}) => {

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={{ flex: 0.55 , alignItems:'center', justifyContent:'center'}}>
          <Image source={item.image} />
        </View>
        <View style={{ flex: 0.45 , alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => actions.intro(false)}>
        <Text style={styles.getStartedText}>{strings.GET_STARTED}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <AppIntroSlider
        data={introSlides}
        renderItem={_renderItem}
        renderDoneButton={_renderDoneButton}
        activeDotStyle={{
          height: moderateScale(4),
          width: moderateScale(42),
          bottom: 4,
          right: moderateScale(90),
          backgroundColor: "red",
        }}
        dotStyle={{
          width: moderateScale(21),
          height: moderateScale(4),
          backgroundColor: colors.white,
          bottom: 4,
          right: moderateScale(90),
        }}
      />
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 0.9,
    backgroundColor: colors.mediumDarkGray,
    marginHorizontal: moderateScale(23),
    borderRadius: moderateScale(9),
    paddingHorizontal:moderateScale(24),
    marginTop:moderateScaleVertical(20)
  },
  title:{
    fontSize:textScale(22),
    color:colors.white,
    textAlign:'center',
  },
  text:{
    color:colors.textGray,
    textAlign:'center',
    marginTop:moderateScaleVertical(8)
  },
  getStartedText:{
    marginTop:moderateScaleVertical(10),
    fontSize:textScale(15),
    color:colors.white
  }
});

export default Intro;
