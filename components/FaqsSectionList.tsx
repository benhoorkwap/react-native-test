import {
  FlatList,
  TouchableHighlight,
  Text,
  View,
  Image,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import React, {useState} from 'react';

// Images
import moneyIcon from '../assets/money.png';
import userIcon from '../assets/3User.png';
import rotateRightIcon from '../assets/rotate-right.png';
import walletMinus from '../assets/wallet-minus.png';

import {FaqListDataType} from '../utils/types';

const FaqsSectionList = () => {
  const [data, SetData] = useState([
    {
      id: 1,
      title: 'What is Family Plus?',
      icon: userIcon,
    },
    {
      id: 2,
      title: 'How do Round-ups work?',
      icon: rotateRightIcon,
    },
    {
      id: 3,
      title: 'What is FamilyPlus Savings?',
      icon: moneyIcon,
    },
    {
      id: 4,
      title: 'How can I withdraw my money?',
      icon: walletMinus,
    },
  ]);

  const ListHeader = () => (
    <View style={{height: 46, backgroundColor: '#fbfafa'}}>
      <Text
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          marginHorizontal: 12,
          fontFamily: 'Mulish-Bold',
          fontSize: 16,
          color: '#4b4b4b',
          fontWeight: '700',
          lineHeight: 20.08,
        }}>
        Grow your Knowledge
      </Text>
    </View>
  );

  const renderItem = ({item}: ListRenderItemInfo<FaqListDataType>) => (
    <TouchableHighlight key={item.id}>
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          backgroundColor: '#fbfafa',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#e3dff7',
            width: 24,
            height: 24,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 12,
          }}>
          <Image source={{uri: item.icon}} style={{width: 12, height: 12}} />
        </View>
        <Text style={styles.faqItemText}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <FlatList
      style={{borderRadius: 6, backgroundColor: '#fdfdfd'}}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}></FlatList>
  );
};

const styles = StyleSheet.create({
  faqItemText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mulish-Medium',
    color: '#4b4b4b',
  },
});

export default FaqsSectionList;
