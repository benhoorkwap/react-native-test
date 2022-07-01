import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Accordion} from '../components/Accordion';
import React, {useState} from 'react';

// Import Screen Components here
import {RowSection, FlexibleRow} from '../components/RowSection';
import FamilyPlusCarousel from '../components/FamilyPlusCarousel';
import RecentTransactionSectionList from '../components/RecentTransactionSectionList';
import {ProjectionCard} from '../components/Card';
import FaqsSectionList from '../components/FaqsSectionList';
import ListOptionItem from '../components/ListOptionItem';
import CategoryItem from '../components/CategoryItem';

import moneyUpright from '../assets/money-upright.png';
import userIcon from '../assets/user.png';
import rotatedMoney from '../assets/money-rotated.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavStackParamList} from '../utils/types';

type NavProps = NativeStackScreenProps<NavStackParamList, 'FamilyPlus'>;

// FamilyPlusScreen
const FamilyPlusScreen = ({navigation}: NavProps) => {
  const [portfolio] = useState('Aggressive');
  const [roundUpSettings] = useState('Automatic');
  const [recurring] = useState('$20/monthly');
  const [beneficiary] = useState('1 Child');
  const [oneTimeInvestment] = useState('');

  const [data] = useState([
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

  const [transactions] = useState([
    {
      name: 'One Time Investment',
      amount: 20.0,
      status: 'Processing',
      transactionID: 1,
    },
    {
      name: 'Withdrawal',
      amount: -8.0,
      status: 'Processing',
      transactionID: 2,
    },
    {
      name: 'Round-up Investment',
      amount: 10.36,
      status: 'Processing',
      transactionID: 3,
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.screenContainer}>
          {/** BackButton */}
          <RowSection marginTop={40}>
            <Icon name="chevron-left" size={16} color="#7f18d0" />
          </RowSection>

          {/** ScreenHeader */}
          <RowSection marginTop={18}>
            <Text style={styles.screenHeaderText}>Family Plus Investments</Text>
          </RowSection>

          {/** Account Carousel */}
          <RowSection fullWidth={true} marginTop={18}>
            <FamilyPlusCarousel data={data} />
          </RowSection>

          {/** Investion Options */}
          <FlexibleRow marginTop={33} flexDirection="row">
            <CategoryItem
              label="FamilyPlus Savings"
              icon={moneyUpright}
              onPress={() =>
                navigation.navigate('InvestInStock')
              }></CategoryItem>
            <CategoryItem
              label="Invest in Stocks"
              icon={rotatedMoney}
              onPress={() =>
                navigation.navigate('InvestInStock')
              }></CategoryItem>
            <CategoryItem
              label="Early for kids"
              icon={userIcon}
              onPress={() =>
                navigation.navigate('InvestInStock')
              }></CategoryItem>
          </FlexibleRow>

          {/** Porfolio Accordion */}
          <RowSection marginTop={36}>
            <Accordion>
              <ListOptionItem
                title="Portfolio"
                selectedOption={portfolio}
                onPress={() => navigation.navigate('Portfolio')}
              />
              <ListOptionItem
                title="Round-up Settings"
                selectedOption={roundUpSettings}
                onPress={() => navigation.navigate('Portfolio')}
              />
              <ListOptionItem
                title="Recurring"
                selectedOption={recurring}
                onPress={() => navigation.navigate('Portfolio')}
              />
              <ListOptionItem
                title="Beneficiary"
                selectedOption={beneficiary}
                onPress={() => navigation.navigate('Portfolio')}
              />
              <ListOptionItem
                title="One-Time investment"
                selectedOption={oneTimeInvestment}
                onPress={() => navigation.navigate('Portfolio')}
              />
            </Accordion>
          </RowSection>

          {/** Recent Transaction Section */}
          <RowSection marginTop={33}>
            <RecentTransactionSectionList transactions={transactions} />
          </RowSection>

          {/** Projection Card Section */}
          <RowSection marginTop={47}>
            <ProjectionCard />
          </RowSection>

          {/** Grow your knowledge Section */}
          <RowSection marginTop={50}>
            <FaqsSectionList />
          </RowSection>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'stretch',
  },

  screenHeaderText: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: '#4B4B4B',
    letterSpacing: -0.165,
    textAlign: 'center',
    fontFamily: 'Mulish-Medium',
  },
});

export default FamilyPlusScreen;
