import React, {useRef} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Animated,
  useWindowDimensions,
} from 'react-native';

import portfolioImage from '../assets/PorfolioImage.png';

import {useDispatch} from 'react-redux';
import {setVisiblePortfolio} from '../redux/features/portfolioSlicer';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const PorfolioCarousel = ({data, style}) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions().width;
  const initialScrollX = new Animated.Value(0);

  const onViewRef = React.useRef(viewableItems => {
    alert(viewableItems.index);
  });
  const viewConfigRef = React.useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 75,
  });

  const _renderItem = ({item}) => {
    return (
      <View style={[styles.carouselItemContainer, {width: windowWidth}]}>
        <Text style={styles.screenHeaderText}>{item.title}</Text>
        <ImageBackground
          source={portfolioImage}
          style={styles.carouselItemImage}
          resizeMode="cover"
        />
      </View>
    );
  };

  const handleViewableItemsChanged = ({viewableItems, changed}) => {
    viewableItems.forEach(token => {
      if (token.isViewable) {
        const item = data[token.index];
        if (item) {
          dispatch(setVisiblePortfolio(item));
        }
      }
    });
  };

  return (
    <View style={[styles.carouselContainer, style, {width: windowWidth}]}>
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

      <AnimatedFlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={_renderItem}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
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
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },

  carouselItemContainer: {
    alignItems: 'center',
  },
  carouselItemImage: {
    width: 238,
    height: 238,
    marginTop: 72,
  },

  carouselIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    position: 'absolute',
    top: 28,
  },

  carouselIndicator: {
    marginHorizontal: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  screenHeaderText: {
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -0.01 * 16,
    color: '#080d45',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Mulish-ExtraBold',
    position: 'absolute',
    top: 0,
  },
});
