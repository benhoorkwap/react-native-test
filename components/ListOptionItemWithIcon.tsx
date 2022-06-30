import {View, Text} from 'react-native';
import Pie from 'react-native-pie';
import {AccordionItem} from '../components/Accordion';
import {ListOptionItemWithIconProps} from '../utils/types';

const ListOptionItemWithIcon = ({
  title,
  iconPercentage,
  onPress,
}: ListOptionItemWithIconProps) => {
  return (
    <AccordionItem onPress={onPress} marginY={8}>
      <Text style={listOptionStyles.titleText}>{title}</Text>
      <View style={listOptionStyles.listOptionIcon}>
        <Pie
          radius={18}
          innerRadius={15}
          sections={[{percentage: iconPercentage, color: '#7f18d0'}]}
          backgroundColor="#ddd"
        />
        <View
          style={{
            position: 'absolute',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.iconText}>{iconPercentage}</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },

  iconText: {
    fontSize: 8,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Mulish-ExtraBold',
  },
});

export default ListOptionItemWithIcon;
