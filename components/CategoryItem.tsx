import {Text} from 'react-native';
import {IconButton} from './Button';
import {CategoryItemProps} from '../utils/types';

const CategoryItem = ({label, icon, onPress}: CategoryItemProps) => {
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

export default CategoryItem;
