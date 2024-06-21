import React from 'react';
import { useQuery } from '@apollo/client';
import { FlatList, StyleSheet, View } from 'react-native';
import { ME } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});

const MyReviews = () => {
  const { data, loading, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Text>Loading...</Text>;

  const reviews = data?.me?.reviews?.edges.map(edge => edge.node) || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default MyReviews;
