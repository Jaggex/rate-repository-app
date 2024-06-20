import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { View, StyleSheet, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import * as Linking from 'expo-linking';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#0366d6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  const repository = data.repository;
  const reviews = repository.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} />
          <Pressable
            style={styles.button}
            onPress={() => Linking.openURL(repository.url)}
          >
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
