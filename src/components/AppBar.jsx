import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    marginHorizontal: 10,
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/signin');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContainer}>
        <Link to="/" style={styles.tab} component={Pressable}>
          <Text fontSize="subheading" fontWeight="bold" color="white">
            Repositories
          </Text>
        </Link>
        {data?.me ? (
          <>
            <Link to="/create-review" style={styles.tab} component={Pressable}>
              <Text fontSize="subheading" fontWeight="bold" color="white">
                Create Review
              </Text>
            </Link>
            <Link to="/my-reviews" style={styles.tab} component={Pressable}>
              <Text fontSize="subheading" fontWeight="bold" color="white">
                My Reviews
              </Text>
            </Link>
            <Pressable onPress={handleSignOut} style={styles.tab}>
              <Text fontSize="subheading" fontWeight="bold" color="white">
                Sign Out
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Link to="/signin" style={styles.tab} component={Pressable}>
              <Text fontSize="subheading" fontWeight="bold" color="white">
                Sign In
              </Text>
            </Link>
            <Link to="/signup" style={styles.tab} component={Pressable}>
              <Text fontSize="subheading" fontWeight="bold" color="white">
                Sign Up
              </Text>
            </Link>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
