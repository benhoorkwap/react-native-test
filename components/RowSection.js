import React from 'react';
import {View, StyleSheet} from 'react-native';

export const RowSection = ({children, fullWidth, marginTop}) => {
  return (
    <View
      style={[
        styles.rowSection,
        {marginHorizontal: fullWidth ? 0 : 24, marginTop: marginTop},
      ]}>
      {children}
    </View>
  );
};

export const FlexibleRow = ({
  children,
  fullWidth,
  flexDirection,
  marginTop,
}) => {
  return (
    <View
      style={{
        flexDirection: flexDirection ? flexDirection : 'row',
        marginHorizontal: fullWidth ? 0 : 24,
        marginTop: marginTop,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children.length &&
        children.map((item, index) => (
          <View
            key={index}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {item}
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rowSection: {
    justifyContent: 'center',
  },
});
