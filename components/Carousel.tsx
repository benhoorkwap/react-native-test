import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  Animated,
  useWindowDimensions,
  ListRenderItemInfo,
} from 'react-native';

import {HomeScreenCarouselProps, HomeCarouselDataType} from '../utils/types';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const HomeScreenCarousel = ({
  data,
  style,
}: HomeScreenCarouselProps<HomeCarouselDataType>) => {
  const windowWidth = useWindowDimensions().width;
  const initialScrollX = new Animated.Value(0);

  const _renderItem = ({item}: ListRenderItemInfo<any>) => {
    return (
      <View style={[styles.carouselItemContainer, {width: windowWidth}]}>
        <Image
          source={item.source}
          style={styles.carouselItemImage}
          resizeMode="cover"
        />
        <Text style={styles.carouselTitleText}>{item.title}</Text>
        <Text style={styles.carouselDescText}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.carouselContainer, style, {width: windowWidth}]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  carouselItemContainer: {
    alignItems: 'center',
  },
  carouselItemImage: {
    width: 238,
    height: 238,
  },

  carouselTitleText: {
    height: 'auto',
    width: '76.27%' /* Corresponding to 286px for a 375px wide screen */,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: '#080D45',
    letterSpacing: -0.01 * 16,
    fontFamily: 'Mulish-ExtraBold',
  },

  carouselDescText: {
    height: 'auto',
    width: '76.27%' /* Corresponding to 286px for a 375px wide screen */,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#333',
    letterSpacing: -0.233684,
    marginTop: 4,
    fontFamily: 'Mulish-Medium',
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
