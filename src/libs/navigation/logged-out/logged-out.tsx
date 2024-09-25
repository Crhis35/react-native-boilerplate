import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'libs/screens';
import { LoggedOutParamList } from 'types/navigation';

const Stack = createStackNavigator<LoggedOutParamList>();

export default function LoggedOutNavigator() {
  let initialRouteName: keyof LoggedOutParamList = 'Authentication';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Authentication" component={HomeScreen} />
    </Stack.Navigator>
  );
}
