import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ListOptionItemProps} from '../utils/types';
import {AccordionItem} from './Accordion';

const ListOptionItem = ({
  title,
  selectedOption,
  onPress,
}: ListOptionItemProps) => {
  return (
    <AccordionItem onPress={onPress}>
      <Text style={listOptionStyles.titleText}>{title}</Text>
      <Text style={listOptionStyles.optionText}>{selectedOption}</Text>
    </AccordionItem>
  );
};

const listOptionStyles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: 'Mulish-Bold',
  },
  optionText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: '#7f18d0',
    fontFamily: 'Mulish-Bold',
  },
});

export default ListOptionItem;
