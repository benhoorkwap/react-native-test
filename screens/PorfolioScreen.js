import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {RowSection, FlexibleRow} from '../components/RowSection';
import {Accordion, AccordionItem} from '../components/Accordion';
import {Button} from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PorfolioCarousel} from '../components/PortfolioCarousel';

// Redux
import {useSelector} from 'react-redux';

const ListOptionItemWithIcon = ({title, icon, onPress}) => {
  return (
    <AccordionItem onPress={onPress} marginY={8}>
      <Text style={listOptionStyles.titleText}>{title}</Text>
      <View style={listOptionStyles.listOptionIcon}>
        <Text style={listOptionStyles.iconText}>10%</Text>
      </View>
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
  listOptionIcon: {
    width: 32,
    height: 32,
    borderWidth: 4,
    borderRightColor: '#edeef7',
    borderTopColor: '#1826D0',
    borderBottomColor: '#edeef7',
    borderLeftColor: '#1826D0',
    borderRadius: 16,
    transform: [{rotate: '-90deg'}],
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    transform: [{rotate: '90deg'}],
    fontSize: 8,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Mulish-ExtraBold',
  },
});

const PortfolioScreen = ({navigation}) => {
  const [isSelected, SetIsSelected] = useState(false);
  const portfolio = useSelector(state => state.portfolio.visiblePortfolio);

  const [data, SetData] = useState([
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
      title: 'Aggressive Portfolio',
    },
    {
      id: 3,
      title: 'Aggressive Portfolio',
    },
    {
      id: 4,
      title: 'Aggressive Portfolio',
    },
    {
      id: 5,
      title: 'Aggressive Portfolio',
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

          <RowSection>
            <Text>{portfolio.title}</Text>
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
              <ListOptionItemWithIcon title="Large Company Stocks (VOO)" />
              <ListOptionItemWithIcon title="Medium Company Stocks (VOO)" />
              <ListOptionItemWithIcon title="Small Company Stocks (VOO)" />
              <ListOptionItemWithIcon title="International Company Stocks (VOO)" />
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
