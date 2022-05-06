import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import WrapperContainer from "../../../Components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import actions from "../../../redux/actions";
import { styles } from "./styles";

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
        <View style={styles.imageContainer}>
          <Image source={item.image} />
        </View>
        <View style={styles.textTitleContainer}>
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
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
      />
    </WrapperContainer>
  );
};



export default Intro;
