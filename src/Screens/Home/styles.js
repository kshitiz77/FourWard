import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../styles/responsiveSize";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
export const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: moderateScaleVertical(24),
  },
  flatlistContainer: {
    backgroundColor: colors.mediumDarkGray,
    marginBottom: moderateScaleVertical(28),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScaleVertical(16),
    borderRadius: moderateScale(8),
  },
  
});
