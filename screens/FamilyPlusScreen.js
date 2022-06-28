import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Accordion, AccordionItem} from '../components/Accordion';
import React, {useState} from 'react';

// Import Screen Components here
import {RowSection, FlexibleRow} from '../components/RowSection';
import FamilyPlusCarousel from '../components/FamilyPlusCarousel';
import RecentTransactionSectionList from '../components/RecentTransactionSectionList';
import {ProjectionCard} from '../components/Card';
import FaqsSectionList from '../components/FaqsSectionList';

import moneyUpright from '../assets/money-upright.png';
import userIcon from '../assets/user.png';
import rotatedMoney from '../assets/money-rotated.png';

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: '#f2e1ff',
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={icon} style={{width: 24, height: 24}}></Image>
      </View>
    </TouchableOpacity>
  );
};

const CategoryItem = ({label, icon, onPress}) => {
  return (
    <>
      <IconButton icon={icon} onPress={onPress}></IconButton>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 12,
          lineHeight: 15,
          marginTop: 4,
        }}>
        {label}
      </Text>
    </>
  );
};

const ListOptionItem = ({title, selectedOption, onPress}) => {
  return (
    <AccordionItem onPress={onPress}>
      <Text style={listOptionStyles.titleText}>{title}</Text>
      <Text style={listOptionStyles.optionText}>{selectedOption}</Text>
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
  optionText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: '#7f18d0',
    fontFamily: 'Mulish-Bold',
  },
});

const FamilyPlusScreen = ({navigation}) => {
  const [portfolio, SetPortfolio] = useState('Aggressive');
  const [roundUpSettings, SetRoundUpSettings] = useState('Automatic');
  const [recurring, SetRecurring] = useState('$20/monthly');
  const [beneficiary, SetBeneficiary] = useState('1 Child');
  const [oneTimeInvestment, SetOneTimeInvestment] = useState('');

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
            <FamilyPlusCarousel />
          </RowSection>

          {/** Investion Options */}
          <FlexibleRow marginTop={33}>
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
            <RecentTransactionSectionList />
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
