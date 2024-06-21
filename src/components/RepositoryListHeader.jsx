import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import OrderSelector from './OrderSelector';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

const RepositoryListHeader = ({ orderBy, setOrderBy, orderDirection, setOrderDirection, searchKeyword, setSearchKeyword }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search"
      value={searchKeyword}
      onChangeText={setSearchKeyword}
    />
    <OrderSelector
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  </View>
);

export default RepositoryListHeader;
