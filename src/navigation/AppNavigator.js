import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CatalogoScreen from "../screens/CatalogoScreen";
import DetalhesScreen from "../screens/DetalhesScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import PerfilScreen from "../screens/PerfilScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Catálogo") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Favoritos") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF6F61",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Catálogo" component={CatalogoScreen} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={({ route }) => ({
          title: route.params?.manga?.title || "Detalhes",
          headerBackTitle: "Voltar",
        })}
      />
    </Stack.Navigator>
  );
}
