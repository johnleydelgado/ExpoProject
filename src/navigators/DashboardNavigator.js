import Icons from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { DashboardScreen, ProfileScreen, SearchScreen, TicketScreen } from '../screens';
const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        title: '',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Ticket') {
            iconName = 'codesandbox';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerStyle: {
            height: 35,
            backgroundColor: '#E5E5E5',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            height: 35,
            backgroundColor: '#E5E5E5',
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: {
            height: 35,
            backgroundColor: '#E5E5E5',
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          headerStyle: {
            height: 35,
            backgroundColor: '#E5E5E5',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
