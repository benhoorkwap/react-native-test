import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Animated,
  useWindowDimensions,
  ListRenderItemInfo,
} from 'react-native';

import Pie from 'react-native-pie';

import {setVisiblePortfolio} from '../redux/features/portfolioSlicer';
import {CarouselProps} from '../utils/types';
import {useAppDispatch} from '../redux/hooks/hooks';

import {PortfolioDataType} from '../utils/types';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const PorfolioCarousel = ({data}: CarouselProps<PortfolioDataType>) => {
  const dispatch = useAppDispatch();
  const windowWidth = useWindowDimensions().width;
  const initialScrollX = new Animated.Value(0);

  const onViewRef = React.useRef(params => {
    const {viewableItems} = params;
    const token = viewableItems[0];
    if (token) {
      dispatch(setVisiblePortfolio(token.item));
    }
  });
  const viewConfigRef = React.useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 75,
  });

  const _renderItem = ({item}: ListRenderItemInfo<PortfolioDataType>) => {
    return (
      <View style={[styles.carouselItemContainer, {width: windowWidth}]}>
        <Text style={styles.screenHeaderText}>{item.title}</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 72,
          }}>
          <Pie
            radius={119}
            innerRadius={75}
            sections={[
              {percentage: item.assetAllocation.voo, color: '#080d45'},
              {percentage: item.assetAllocation.ijh, color: '#7982fa'},
              {percentage: item.assetAllocation.Ijr, color: '#C2C7ff'},
              {percentage: item.assetAllocation.ixus, color: '#1826D0'},
            ]}
            strokeCap={'butt'}></Pie>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'red',
              alignContent: 'center',
              width: 180,
              marginTop: 16,
            }}>
            <Text
              style={[
                {backgroundColor: '#080d45'},
                styles.percentageText,
              ]}>{`${item.assetAllocation.voo}%`}</Text>
            <Text
              style={[
                {backgroundColor: '#7982fa'},
                styles.percentageText,
              ]}>{`${item.assetAllocation.ijh}%`}</Text>
            <Text
              style={[
                {backgroundColor: '#C2C7ff'},
                styles.percentageText,
              ]}>{`${item.assetAllocation.Ijr}%`}</Text>
            <Text
              style={[
                {backgroundColor: '#1826D0'},
                styles.percentageText,
              ]}>{`${item.assetAllocation.ixus}%`}</Text>
          </View>
        </View>
      </View>
    );
  };

  const handleViewableItemsChanged = ({viewableItems}) => {
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
    <View style={[styles.carouselContainer, {width: windowWidth}]}>
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

  percentageText: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
});
