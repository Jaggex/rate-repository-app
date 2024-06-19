import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import AppBarTab from './AppBarTab';

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
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContainer}>
        <Link to="/" style={styles.tab}>
          <AppBarTab onPress={() => navigate('/')}>
            Repositories
          </AppBarTab>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <AppBarTab onPress={() => navigate('/signin')}>
            Sign in
          </AppBarTab>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;

