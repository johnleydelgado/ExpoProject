import Icons from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { MAIN } from '../common/constant/screens';
import { DashboardScreen, ProfileScreen, SearchScreen, TicketScreen } from '../screens';

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
        tabBarActiveTintColor: '#3abd3a',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerTitle: 'Home',
          headerStyle: {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            // borderBottomLeftRadius: 12,
            // borderBottomRightRadius: 12,
            backgroundColor: 'transparent',
            // shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            // elevation: 5,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          headerStyle: {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
