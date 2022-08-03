import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./stack";

function Root({}) {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default Root;
