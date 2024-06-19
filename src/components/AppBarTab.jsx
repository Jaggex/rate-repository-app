import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text fontSize="subheading" fontWeight="bold" color="white">{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
