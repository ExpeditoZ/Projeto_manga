import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/store";

export default function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
