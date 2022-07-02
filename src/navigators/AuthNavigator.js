import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import { LoginScreen } from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="LoginIn"
        component={LoginScreen}
        options={{
          title: "Login",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
