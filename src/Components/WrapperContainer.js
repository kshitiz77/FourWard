import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import colors from '../styles/colors';

import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import Loader from './Loader';


const WrapperContainer = ({
  children,
  bgColor = colors.themeColor,
  statusBarColor = colors.themeColor,
  barStyle = 'light-content',
  withModal="",
  isLoading="",
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <Loader isLoading={isLoading} withModal={withModal}/>
      <View style={{ backgroundColor: bgColor, flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
