import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import fpImage from '../assets/FamilyPlusBackground.png';
import * as utils from '../utils/utils';

import {CardButton} from './Button';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FamilyPlusCarousel = ({items}) => {
  const windowWidth = useWindowDimensions().width;
  const initialScrollX = new Animated.Value(0);
  const [data, SetData] = useState([
    {
      title: 'Total Balance',
      amount: 4500.0,
      currency: 'USD',
    },
    {
      title: 'Round-ups',
      amount: 500.0,
      currency: 'USD',
    },
    {
      title: 'Term Savings',
      amount: 1500.0,
      currency: 'USD',
    },
    {
      title: 'Stocks',
      amount: 2500.0,
      currency: 'USD',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <View style={[styles.carouselItemContainer, {width: windowWidth}]}>
        <ImageBackground source={fpImage} style={styles.imageBackgroundStyle}>
          <Text style={styles.amountText}>
            {utils.formatAmountToString(item.amount, item.current)}
          </Text>
          <Text style={styles.titleText}>{item.title}</Text>
          {index === 0 && (
            <View style={styles.cardButtonContainer}>
              <CardButton title="Add Money"></CardButton>
              <CardButton title="Widthdraw"></CardButton>
            </View>
          )}
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={[styles.carouselContainer, {width: windowWidth}]}>
      <AnimatedFlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        renderItem={_renderItem}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: initialScrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}></AnimatedFlatList>

      <View style={styles.carouselIndicatorContainer}>
        {data.map((item, index) => {
          const backgroundColor = initialScrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],

            outputRange: ['#c9c9ca', '#7F18D0', '#c9c9ca'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.carouselIndicator, {backgroundColor}]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: 'transparent',
  },

  carouselItemContainer: {
    alignItems: 'center',
  },

  imageBackgroundStyle: {
    height: 173,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 58,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 19,
  },

  amountText: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 40,
    lineHeight: 50,
    letterSpacing: 0.05 * 16,
  },
  titleText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.165,
  },

  carouselIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },

  carouselIndicator: {
    marginHorizontal: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default FamilyPlusCarousel;
