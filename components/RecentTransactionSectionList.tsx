import {
  FlatList,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from './CustomButton';

import {
  RectionTransactionDataType,
  TransactionSectionProps,
} from '../utils/types';

const RecentTransactionSectionList = (
  transactions: TransactionSectionProps<RectionTransactionDataType>,
) => {
  /**Todo: Define UseEffect to fetch recent transactions from the server */

  // Function to be passed to the FlatList.renderItem property.
  const renderItem = ({
    item,
  }: ListRenderItemInfo<RectionTransactionDataType>) => (
    <TouchableHighlight key={item.transactionID}>
      <View
        style={{flexDirection: 'row', height: 65, backgroundColor: '#fdfdfd'}}>
        <View style={{flexBasis: 48, height: 'auto', alignSelf: 'center'}}>
          <Icon
            style={{textAlign: 'center', color: '#7f19D0'}}
            name="check-circle"
            size={24}
            color="#373F41"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,
            alignContent: 'center',
          }}>
          <View style={{flexBasis: '80%'}}>
            <Text style={styles.transactionTitle}>{item.name}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.transactionAmount}>{`$${item.amount}`}</Text>
          </View>
          <View style={{flexBasis: '100%'}}>
            <Text style={styles.transactionStatus}>{item.status}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
  const ListHeader = () => (
    <View style={{height: 65, backgroundColor: '#fbfafa'}}>
      <Text
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          marginHorizontal: 12,
          fontFamily: 'Mulish-Bold',
          fontSize: 16,
          fontWeight: '700',
          lineHeight: 20.08,
        }}>
        Recent Transactions
      </Text>
    </View>
  );

  const ListFooter = () => (
    <CustomButton
      title={'View all'}
      style={{
        width: '100%',
        backgroundColor: '#7f19D0',
        height: 50,
        borderRadius: 6,
      }}></CustomButton>
  );

  return (
    <FlatList
      style={{borderRadius: 6, backgroundColor: '#fdfdfd'}}
      data={transactions.data}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}></FlatList>
  );
};

const styles = StyleSheet.create({
  transactionTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
  transactionAmount: {
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    color: '#4B4B4B',
  },

  transactionStatus: {
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    color: '#4B4B4B',
  },
});

export default RecentTransactionSectionList;
