import React from 'react';
import {View} from 'react-native';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ButtonProps, IconButtonProps} from '../utils/types';
//

export const Button = ({title, variant, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, styles[variant]]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Icon Button
// export const IconButton = ({name, onPress, style}: IconButtonProps) => {
//   return (
//     <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
//       <Icon name={name} size={16} color="#373F41" />
//     </TouchableOpacity>
//   );
// };

export const IconButton = ({icon, onPress}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: '#f2e1ff',
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={{uri: icon}} style={{width: 24, height: 24}}></Image>
      </View>
    </TouchableOpacity>
  );
};

export const CardButton = ({title, style}: ButtonProps) => {
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
