import { useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Button } from 'native-base';
import React from 'react';

import { MAIN } from '../common/constant/screens';
import {
  DashboardScreen,
  LoginScreen,
  OnBoardingScreen,
  SignUpScreen,
  TestScreen,
} from '../screens';
import DashboardNavigator from './DashboardNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}>
      <Stack.Screen name={MAIN.ONBOARDING} component={OnBoardingScreen} />
      <Stack.Screen
        name={MAIN.LOGIN}
        component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name={MAIN.SIGN_UP} component={SignUpScreen} options={{ title: 'SIGNUP' }} />
      <Stack.Screen
        name={MAIN.TEST}
        component={TestScreen}
        options={{
          title: 'Sign Up',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={MAIN.DASHBOARD}
        component={DashboardNavigator}
        options={{
          title: 'Dashboard',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
