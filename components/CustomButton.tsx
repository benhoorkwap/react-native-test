import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from '../utils/types';

// CustomButton Component
// The CustomButton element takes in two properties: title and styles.
// The computed style for the custom button applies the styles passed in as prop in addition to the `defaultButtonStyle`.
const CustomButton = ({title, style}: ButtonProps) => {
  return (
    <TouchableOpacity style={[customButtonStyles.defaultBtnStyles, style]}>
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
