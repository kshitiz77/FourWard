import { View, Text } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import TextInputWithLable from "../../Components/TextInputWithLable";
import strings from "../../constants/lang";
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";
import colors from "../../styles/colors";
const Search = () => {
  return (
    <WrapperContainer>
      <View style={{marginHorizontal:moderateScale(24), marginVertical:moderateScaleVertical(20)}}>
        <TextInputWithLable
          placeholder={strings.ENTER_LOCATION_MANUALLY}
        />
      </View>
    </WrapperContainer>
  );
};

export default Search;
