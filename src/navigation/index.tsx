import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, SignIn } from '../screens';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator();

const routes = [
  {
    name: 'SignIn',
    component: SignIn,
    showHeader: false,
    headerProps: {
      showBackButton: false,
    },
  },
  {
    name: 'Dashboard',
    component: Dashboard,
    showHeader: true,
    headerProps: {
      showBackButton: true,
    },
  },
  {
    name: 'Details',
    component: SignIn,
    showHeader: true,
    headerProps: {
      showBackButton: true,
    },
  },
];

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(({ name, component }) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{
                header: () => null, // to-do: Header Component
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
