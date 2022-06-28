import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

// CustomButton Component
// The CustomButton element takes in two properties: title and styles.
// The computed style for the custom button applies the styles passed in as prop in addition to the `defaultButtonStyle`.
const CustomButton = ({title, styles, textFontStyles}) => {
  return (
    <TouchableOpacity style={[customButtonStyles.defaultBtnStyles, styles]}>
      <Text style={[customButtonStyles.defaultTxtStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const customButtonStyles = StyleSheet.create({
  /* Default Style rules for content of the Button */

  defaultBtnStyles: {
    position: 'relative',
    alignItems: 'center',
  },

  defaultTxtStyles: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Mulish-Bold',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default CustomButton;
