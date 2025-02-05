import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const BookLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="reader-screen"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};

export default BookLayout;
