import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {RowSection} from '../components/RowSection';
import {Button} from '../components/Button';
import {Accordion} from '../components/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PorfolioCarousel} from '../components/PortfolioCarousel';
import ListOptionItemWithIcon from '../components/ListOptionItemWithIcon';

// Redux
import {useAppSelector} from '../redux/hooks/hooks';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavStackParamList} from '../utils/types';

type NavProps = NativeStackScreenProps<NavStackParamList, 'Portfolio'>;

const PortfolioScreen = ({navigation}: NavProps) => {
  const portfolio = useAppSelector(state => state.portfolio.visiblePortfolio);

  const [data] = useState([
    {
      id: 1,
      title: 'Aggressive Portfolio',
      assetAllocation: {
        voo: 55,
        ijh: 10,
        Ijr: 5,
        ixus: 30,
      },
    },
    {
      id: 2,
      title: 'Moderate Portfolio',
      assetAllocation: {
        voo: 35,
        ijh: 25,
        Ijr: 20,
        ixus: 20,
      },
    },
    {
      id: 3,
      title: 'Defensive Portfolio',
      assetAllocation: {
        voo: 10,
        ijh: 45,
        Ijr: 15,
        ixus: 30,
      },
    },
    {
      id: 4,
      title: 'Speculative Portfolio',
      assetAllocation: {
        voo: 15,
        ijh: 25,
        Ijr: 25,
        ixus: 35,
      },
    },
    {
      id: 5,
      title: 'Some Portfolio',
      assetAllocation: {
        voo: 40,
        ijh: 20,
        Ijr: 15,
        ixus: 25,
      },
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.screenContainer}>
        <ScrollView>
          <RowSection marginTop={40}>
            <View style={{flexDirection: 'row', alignSelf: 'stretch'}}>
              <Icon
                name="chevron-left"
                style={{flex: 1}}
                size={16}
                color="#7f18d0"
                onPress={() => navigation.navigate('FamilyPlus')}
              />

              <Icon
                name="question-circle-o"
                size={16}
                color="#7f18d0"
                onPress={() => navigation.navigate('FamilyPlus')}
              />
            </View>
          </RowSection>

          {/* <RowSection>
            <Text style={styles.screenHeaderText}>Aggressive Portfolio</Text>
          </RowSection> */}

          <RowSection fullWidth={true} marginTop={18}>
            <PorfolioCarousel data={data} />
          </RowSection>

          <RowSection marginTop={18}>
            <View style={styles.outcomeContainer}>
              <Text style={styles.outcomeHeaderText}>Prospective Outcome:</Text>
              <Text style={styles.outcomeText}>Risk: 6</Text>
              <Text style={styles.outcomeText}>Returns: 10-15%</Text>
            </View>
          </RowSection>

          <RowSection marginTop={8}>
            <Accordion>
              <ListOptionItemWithIcon
                title="Large Company Stocks (VOO)"
                iconPercentage={portfolio.assetAllocation.voo}
              />
              <ListOptionItemWithIcon
                title="Medium Company Stocks (VOO)"
                iconPercentage={portfolio.assetAllocation.ijh}
              />
              <ListOptionItemWithIcon
                title="Small Company Stocks (VOO)"
                iconPercentage={portfolio.assetAllocation.Ijr}
              />
              <ListOptionItemWithIcon
                title="International Company Stocks (VOO)"
                iconPercentage={portfolio.assetAllocation.ixus}
              />
            </Accordion>
          </RowSection>

          <RowSection marginTop={39}>
            <Button title="This portfolio is selected" variant="secondary" />
          </RowSection>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },

  outcomeContainer: {
    backgroundColor: '#f8f8f8',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 17,
    paddingVertical: 17,
    borderRadius: 6,
  },

  outcomeHeaderText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.25775,
    fontFamily: 'Mulish-ExtraBold',
  },

  outcomeText: {
    color: '#666',
    ontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.25775,
    fontFamily: 'Mulish',
  },

  screenHeaderText: {
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -0.01 * 16,
    color: '#080d45',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Mulish-ExtraBold',
  },

  styleLikeSvg: {
    width: 180,
    height: 180,
    borderWidth: 30,
    borderRightColor: '#edeef7',
    borderTopColor: '#1826D0',
    borderBottomColor: '#edeef7',
    borderLeftColor: '#1826D0',
    borderRadius: 90,
    alignSelf: 'center',
  },
});

export default PortfolioScreen;
