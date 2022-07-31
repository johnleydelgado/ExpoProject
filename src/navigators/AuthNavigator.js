import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Center } from 'native-base';
import React from 'react';

import { MAIN } from '../common/constant/screens';
import {
  LoginScreen,
  OnBoardingScreen,
  ProfileEditScreen,
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
        name={MAIN.PROFILE}
        component={ProfileEditScreen}
        options={{
          title: 'Bio-data',
          headerShown: true,
          headerTitle: 'Bio-data',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
        }}
      />
      <Stack.Screen
        name={MAIN.TEST}
        component={TestScreen}
        options={{
          title: 'TEST',
          headerShown: true,
          headerTitle: 'SIGNUP',
          headerTitleAlign: 'center',
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
