import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
  },
});

const OrderSelector = ({ orderBy, setOrderBy, orderDirection, setOrderDirection }) => {
  const selectedValue = () => {
    if (orderBy === 'RATING_AVERAGE' && orderDirection === 'ASC') {
      return 'RATING_AVERAGE_ASC';
    }
    if (orderBy === 'RATING_AVERAGE' && orderDirection === 'DESC') {
      return 'RATING_AVERAGE_DESC';
    }
    return 'CREATED_AT_DESC';
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue()}
        onValueChange={(itemValue) => {
          if (itemValue === 'RATING_AVERAGE_ASC') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
          } else if (itemValue === 'RATING_AVERAGE_DESC') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
          } else {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
          }
        }}
      >
        <Picker.Item label="Latest repositories" value="CREATED_AT_DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE_DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_ASC" />
      </Picker>
    </View>
  );
};

export default OrderSelector;
