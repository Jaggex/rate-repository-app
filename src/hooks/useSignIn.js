import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const response = await mutate({ variables: { credentials: { username, password } } });
      const { data } = response;
      
      if (data && data.authenticate && data.authenticate.accessToken) {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        await apolloClient.resetStore();
      }

      return response;
    } catch (error) {
      console.error('Error during sign in:', error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;