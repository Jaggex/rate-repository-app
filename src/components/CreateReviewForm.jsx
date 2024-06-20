import React from 'react';
import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  inputError: {
    borderColor: '#d73a4a',
  },
  button: {
    backgroundColor: '#0366d6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: 10,
  },
});

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required("Repository owner's username is required"),
  repositoryName: Yup.string().required("Repository's name is required"),
  rating: Yup.number()
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required'),
  text: Yup.string(),
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={[styles.input, touched.ownerName && errors.ownerName && styles.inputError]}
            placeholder="Repository owner's username"
            onChangeText={handleChange('ownerName')}
            onBlur={handleBlur('ownerName')}
            value={values.ownerName}
          />
          {touched.ownerName && errors.ownerName && (
            <Text style={styles.errorText}>{errors.ownerName}</Text>
          )}
          <TextInput
            style={[styles.input, touched.repositoryName && errors.repositoryName && styles.inputError]}
            placeholder="Repository's name"
            onChangeText={handleChange('repositoryName')}
            onBlur={handleBlur('repositoryName')}
            value={values.repositoryName}
          />
          {touched.repositoryName && errors.repositoryName && (
            <Text style={styles.errorText}>{errors.repositoryName}</Text>
          )}
          <TextInput
            style={[styles.input, touched.rating && errors.rating && styles.inputError]}
            placeholder="Rating between 0 and 100"
            keyboardType="numeric"
            onChangeText={handleChange('rating')}
            onBlur={handleBlur('rating')}
            value={values.rating}
          />
          {touched.rating && errors.rating && (
            <Text style={styles.errorText}>{errors.rating}</Text>
          )}
          <TextInput
            style={[styles.input, { height: 100 }, touched.text && errors.text && styles.inputError]}
            placeholder="Review"
            multiline
            onChangeText={handleChange('text')}
            onBlur={handleBlur('text')}
            value={values.text}
          />
          {touched.text && errors.text && (
            <Text style={styles.errorText}>{errors.text}</Text>
          )}
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create a review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default CreateReviewForm;
