import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//
export const Button = ({title, variant, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, styles[variant]]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Icon Button
export const IconButton = ({name, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
      <Icon name={name} size={16} color="#373F41" />
    </TouchableOpacity>
  );
};

export const CardButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[cardButtonStyles.cardButtonContainer, style]}>
      <Text style={cardButtonStyles.cardButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const cardButtonStyles = StyleSheet.create({
  cardButtonContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 32,
    width: 92,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardButtonText: {
    color: '#4B4B4B',
    backgroundColor: 'transparent',
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
  },
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 16,
    flex: 1,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Mulish-Bold',
  },
  primary: {
    backgroundColor: '#7F18D0',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#c2c7ff',
    color: '#4B4B4B',
  },

  iconButton: {
    width: 27,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
