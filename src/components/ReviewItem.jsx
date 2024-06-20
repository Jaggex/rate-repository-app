import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#0366d6',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ratingText: {
    color: '#0366d6',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  date: {
    color: '#586069',
    marginTop: 2,
  },
  comment: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{review.user.username}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.comment}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;

