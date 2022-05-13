//import liraries
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
import { moderateScale, textScale } from "../styles/responsiveSize";

const HeaderComp = ({
  onPressBack,
  showTitle,
  title,
  rightIcon,
  showRightIcon,
  onPress,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onPressBack ? onPressBack : () => goBack()}>
          <Image source={imagePath.back} />
        </TouchableOpacity>
        {showTitle ? <Text style={styles.titleStyle}>{title}</Text> : null}
      </View>
      {showRightIcon ? (
        <TouchableOpacity onPress={onPress}>
          <Image source={rightIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: moderateScale(42),
    justifyContent: "space-between",
  },
  titleStyle: {
    color: colors.white,
    fontSize: textScale(16),
    marginLeft: moderateScale(16),
    fontFamily: fontFamily.mulishSemiBold,
  },
});

//make this component available to the app
export default HeaderComp;
