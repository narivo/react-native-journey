import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
