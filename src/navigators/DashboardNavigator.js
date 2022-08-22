import { Entypo, Feather } from '@expo/vector-icons';
import Icons from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import _ from 'lodash';
import { IconButton } from 'native-base';
import React from 'react';

import { MAIN, STACKS, TABS } from '../common/constant/screens';
import { DashboardScreen, ProfileScreen, SearchScreen, TicketScreen } from '../screens';
import EditProfile from '../screens/main/profile/EditProfile';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === TABS.DASHBOARD) {
            iconName = 'home';
          } else if (route.name === TABS.PROFILE) {
            iconName = 'user';
          } else if (route.name === TABS.SEARCH) {
            iconName = 'search';
          } else if (route.name === TABS.TICKET) {
            iconName = 'codesandbox';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={TABS.DASHBOARD}
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
        name={TABS.SEARCH}
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
        name={TABS.TICKET}
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
      <Tab.Screen
        name={TABS.PROFILE}
        component={ProfileStack}
        options={({ route }) => ({ headerShown: false })}
      />
    </Tab.Navigator>
  );
};

const ProfileStack = ({ navigation, route }) => {
  const nav = useNavigation();
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['EDIT_PROFILE_STACK', 'Map'];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={STACKS.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          headerShown: false,
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

      <Stack.Screen
        name={STACKS.EDIT_PROFILE}
        component={EditProfile}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: (props) => (
            <IconButton
              icon={<Feather name="arrow-left" size={16} color="black" />}
              onPress={() => navigation.navigate(TABS.PROFILE, { screen: STACKS.PROFILE_SCREEN })}
            />
          ),
          headerTitle: 'Bio-data',
        }}
      />
    </Stack.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  if (_.includes(['EDIT_PROFILE_STACK'], route.name)) {
    return false;
  }
  return true;
};

export default DashboardNavigator;
