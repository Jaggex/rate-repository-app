import React, { useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import OrderSelector from './OrderSelector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const { repositories, loading } = useRepositories({ orderBy, orderDirection });

  if (loading) return <ActivityIndicator style={styles.container} />;

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <OrderSelector
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      )}
    />
  );
};

export default RepositoryList;
