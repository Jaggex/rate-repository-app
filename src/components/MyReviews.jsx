import React from 'react';
import { useQuery } from '@apollo/client';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { ME } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { data, loading, error } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  const reviews = data.me.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
