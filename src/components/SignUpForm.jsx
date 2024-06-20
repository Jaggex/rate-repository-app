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
  username: Yup.string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username cannot be longer than 30 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password cannot be longer than 50 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={[styles.input, touched.username && errors.username && styles.inputError]}
            placeholder="Username"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
          />
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
          <TextInput
            style={[styles.input, touched.password && errors.password && styles.inputError]}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <TextInput
            style={[styles.input, touched.passwordConfirmation && errors.passwordConfirmation && styles.inputError]}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            value={values.passwordConfirmation}
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <Text style={styles.errorText}>{errors.passwordConfirmation}</Text>
          )}
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
