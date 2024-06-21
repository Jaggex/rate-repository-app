import React from 'react';
import { View, StyleSheet, Alert, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import Text from './Text';
import { format } from 'date-fns';
import { DELETE_REVIEW } from '../graphql/mutations';
import { ME } from '../graphql/queries';

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  viewButton: {
    backgroundColor: '#0366d6',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const ReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: ME, variables: { includeReviews: true } }],
  });

  const handleViewRepository = () => {
    navigate(`/repository/${review.repository.id}`);
  };

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await deleteReview({ variables: { id: review.id } });
              refetch();
            } catch (e) {
              console.error(e);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

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
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.viewButton]} onPress={handleViewRepository}>
            <Text style={styles.buttonText}>View Repository</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.deleteButton]} onPress={handleDeleteReview}>
            <Text style={styles.buttonText}>Delete Review</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
