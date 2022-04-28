import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

import { theme } from "./src/infrastructure/theme";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

const Tab = createBottomTabNavigator();

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

export default function App() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = "md-restaurant";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                } else if (route.name === "Map") {
                  iconName = "md-map";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
