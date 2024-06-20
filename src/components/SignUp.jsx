import React from 'react';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import useSignIn from '../hooks/useSignIn';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({ variables: { user: { username, password } } });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
