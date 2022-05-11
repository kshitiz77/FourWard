import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import colors from "../../styles/colors";
import strings from "../../constants/lang";
import imagePath from "../../constants/imagePath";
import { styles } from "./styles";

const Notification = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          {strings.NOTIFICATION}
        </Text>
        <View style={{ marginVertical: moderateScaleVertical(16) }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            showsVerticalScrollIndicator={false}
            renderItem={(element, index) => (
              <View style={styles.notificationContainer}>
                <View style={{ paddingVertical: moderateScaleVertical(16) }}>
                  <Image
                    source={imagePath.ironMan}
                    style={styles.userImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.notificationRightContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: moderateScale(16),
                    }}
                  >
                    <Text style={styles.userName}>
                      Iron Man {''}
                      <Text
                        style={{ fontSize: textScale(16), color: colors.white }}
                      >
                        {strings.ADD_A_NEW_POST}
                      </Text>
                    </Text>
                  </View>
                  <Text
                    style={styles.timeStyle}
                  >
                    20 min ago
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Notification;
