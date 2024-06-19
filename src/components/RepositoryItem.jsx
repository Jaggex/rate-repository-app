import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text'; // Import the custom Text component

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  fullName: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 5,
  },
  language: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.content}>
          <Text fontWeight="bold" style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
