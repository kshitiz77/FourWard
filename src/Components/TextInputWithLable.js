import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, scale } from '../styles/responsiveSize';

const TextInputWithLable = ({
    label,
    placeholder,
    onChangeText = () => { },
    inputStyle = {},
    rightText,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputContainerStyle, ...inputStyle }}>
            <View style={styles.flexView}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.inputStyle}
                    placeholderTextColor={colors.white}
                    onChangeText={onChangeText}
                    {...props}
                />
                {rightText ? 
                <TouchableOpacity onPress={onPressRight} activeOpacity={0.5}>
                    <Text style={{color:colors.white, marginRight:moderateScale(16)}}>{rightText}</Text>
                </TouchableOpacity>
                : null
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputContainerStyle: {
        backgroundColor:colors.mediumDarkGray,
        borderBottomColor: colors.grayB,
        borderRadius: moderateScale(8),
    },
    inputStyle: {
        flex:1,
        padding: moderateScaleVertical(15),
        fontSize: scale(14),
        color: colors.white,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default TextInputWithLable;
