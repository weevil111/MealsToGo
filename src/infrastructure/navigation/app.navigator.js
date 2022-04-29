import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings Screen</Text>
  </SafeArea>
);

const MapScreen = () => (
  <SafeArea>
    <Text>Map Screen</Text>
  </SafeArea>
);

const navigatorScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    const iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={navigatorScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
