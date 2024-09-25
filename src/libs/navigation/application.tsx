import React from 'react';

import { StyleSheet, Text } from 'react-native';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { appConfig } from 'config/app-config';

import appVersion from '../../../version'; // Import the version
import { LoggedInNavigator } from './logged-in';
import { LoggedOutNavigator } from './logged-out';

export default function ApplicationNavigator() {
  const navigationRef = useNavigationContainerRef();

  const currentUser = false;

  return (
    <NavigationContainer ref={navigationRef}>
      {currentUser ? <LoggedInNavigator /> : <LoggedOutNavigator />}
      {appConfig.appEnv !== 'prod' ? (
        <Text style={styles.text}>
          {`${appConfig.appEnv}-build-${appVersion}`}
        </Text>
      ) : null}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    color: 'black',
    padding: 0,
    fontSize: 10,
    textAlign: 'center',
  },
});
