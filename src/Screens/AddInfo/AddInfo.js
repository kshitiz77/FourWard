import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HeaderComp from "../../Components/HeaderComp";
import strings from "../../constants/lang";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import { styles } from "./styles";
import ButtonComp from "../../Components/ButtonComp";
import TextInputWithLable from "../../Components/TextInputWithLable";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";

const AddInfo = ({ navigation }) => {
 
  return (
    <WrapperContainer>
      <View
        style={styles.container}
      >
        <View>
          <HeaderComp
            showTitle={true}
            title={strings.ADD_INFO}
            // onPressBack={() => navigation.goBack()}
          />
          <View
            style={{
              marginTop: moderateScaleVertical(8),
              flexDirection: "row",
            }}
          >
            <Image
              source={imagePath.ironMan}
              style={{
                width: moderateScale(width / 5.5),
                height: moderateScale(width / 5.5),
                borderRadius: moderateScale(8),
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.addmorePostStyle}
            >
              <Image source={imagePath.plusIcon} />
            </TouchableOpacity>
          </View>
          <TextInputWithLable
            multiline={true}
            numberOfLines={10}
            inputStyle={styles.descriptionInputStyle}
            placeholder={strings.WRITE_DESCRIPTION_HERE}
          />
          <TextInputWithLable
            inputStyle={{ paddingHorizontal: moderateScale(16) }}
            placeholder={strings.ADD_LOCATION}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          contentContainerStyle={{}}
        >
          <View style={{ marginBottom: moderateScaleVertical(56) }}>
            <ButtonComp
              btnText={strings.POST}
              btnStyle={{ backgroundColor: colors.btnOrange }}
              btnTextStyle={{ color: colors.white, textTransform: "uppercase" }}
              // onPress={}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </WrapperContainer>
  );
};



export default AddInfo;
