import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Button} from '../components/Button';
import {HomeScreenCarousel} from '../components/Carousel';
import {useState} from 'react';
import coinAmecoImage from '../assets/coin-ameco.png';
import {RowSection} from '../components/RowSection';
import Icon from 'react-native-vector-icons/FontAwesome';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavStackParamList} from '../utils/types';

type NavProps = NativeStackScreenProps<NavStackParamList, 'InvestInStock'>;

const StockScreen = ({navigation}: NavProps) => {
  // mock data items to use for the carousel component.
  // Todo: Fetch real data from api and pass it to the carousel component
  const [items] = useState([
    {
      title: '3KLE invests your money intelligently in stocks',
      description:
        'Build, perserve and manage your family wealth with stocks investment',
      source: coinAmecoImage,
    },
    {
      title: '3KLE invests your money intelligently in stocks',
      description:
        'Build, perserve and manage your family wealth with stocks investment',
      source: coinAmecoImage,
    },
    {
      title: '3KLE invests your money intelligently in stocks',
      description:
        'Build, perserve and manage your family wealth with stocks investment',
      source: coinAmecoImage,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.screenContainer}>
        <ScrollView>
          {/** Close Button */}
          <RowSection marginTop={41}>
            <Icon
              name="close"
              size={16}
              color="#7f18d0"
              onPress={() => navigation.navigate('FamilyPlus')}
            />
          </RowSection>

          {/** Carousel */}
          <RowSection fullWidth={true} marginTop={61}>
            <HomeScreenCarousel data={items} />
          </RowSection>

          {/** GetStarted Primary Button */}
          <RowSection marginTop={15}>
            <Button title="Get Started" variant="primary" />
          </RowSection>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },

  closeButton: {
    alignSelf: 'flex-start',
    marginTop: 42,
    marginLeft: 24,
  },
});

export default StockScreen;
