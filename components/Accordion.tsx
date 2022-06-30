import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AccordionItemProps, AccordionProps} from '../utils/types';

// This should be used inside <Accordion> component.
// It outputs variable components in addition to chevron-right icon
// Default size of the Icon: 54 by 100% width
// Default Icon size is 16px
export const AccordionItem = ({
  children,
  onPress,
  marginY,
}: AccordionItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.accordionItemContainer,
          {marginVertical: marginY ? marginY / 2 : 0},
        ]}>
        {
          /** For each child element, wrap the element inside a <View>
           * component with the first children occupying the available space
           *
           **/
          children.length === undefined ? (
            <View style={[styles.accordionItem, {flex: 1}]}>{children}</View>
          ) : (
            children.map((item, index) =>
              index == 0 ? (
                <View
                  key={`accordion-main-${index}`}
                  style={[styles.accordionItem, {flex: 1}]}>
                  {item}
                </View>
              ) : (
                <View
                  key={`accordion-sub-${index}`}
                  style={[styles.accordionItem]}>
                  {item}
                </View>
              ),
            )
          )
        }
        <View>
          <Icon name="chevron-right" size={16} color="#888789" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Usage:
// <Accordion>
//      <AccordionItem>
//          <Text>Promotion<Text>
//          <Text>Aggressive<Text>
//      </AccordionItem>
//  </Accordion>
export const Accordion = ({children}: AccordionProps) => {
  return <View style={styles.accordionContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  accordionContainer: {
    borderRadius: 6,
  },
  accordionItemContainer: {
    flexDirection: 'row',
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 18,
    height: 65,
  },
  accordionItem: {},
});
