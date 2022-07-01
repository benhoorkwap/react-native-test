import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {IconButton} from './Button';
import {CategoryItemProps} from '../utils/types';

const CategoryItem = ({label, icon, onPress}: CategoryItemProps) => {
  return (
    <>
      <IconButton icon={icon} onPress={onPress}></IconButton>
      <Text style={styles.iconButtonText}>{label}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  iconButtonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 15,
    marginTop: 4,
  },
});

export default CategoryItem;
