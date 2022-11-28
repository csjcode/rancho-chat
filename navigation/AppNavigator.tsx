import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";
import { useSelector } from "react-redux";

const AppNavigator = (): JSX.Element => {
  const isAuth = useSelector(
    (state: any) => state.auth.token !== null && state.auth.token !== ""
  );

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
