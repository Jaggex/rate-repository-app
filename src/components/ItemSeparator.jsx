import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
});

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ItemSeparator;