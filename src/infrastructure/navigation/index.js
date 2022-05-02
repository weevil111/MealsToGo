import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? (
    <AppNavigator />
  ) : (
    <View>
      <Text>Not authenticated</Text>
    </View>
  );
};
