import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import AuthNavigator from "./AuthNavigator";
import DashboardNavigator from "./DashboardNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
