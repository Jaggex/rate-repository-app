import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';


const AppBarTab = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text fontSize='subheading' fontWeight='bold' color={'white'}>
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
