import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Image} from 'react-native';
import projectionCard from '../assets/projection-card.png';

export const ProjectionCard = () => {
  return (
    <View style={styles.projectionCard}>
      <Text style={styles.titleText}>
        Hypotetical Projection of $12,000 at age 16
      </Text>
      <View style={styles.itemsContainer}>
        <Text>Investment: $550</Text>
        <Text>Returns: $1200</Text>
      </View>
      <Image
        style={styles.imageStyles}
        source={projectionCard}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  projectionCard: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#edeef7',
    paddingVertical: 32,
    height: 471,
  },
  titleText: {
    color: '#4B4B4B',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 65,
  },

  itemsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 48,
  },
  imageStyles: {
    height: 197,
    width: '100%',
    position: 'relative',
    marginTop: 115,
  },
});
