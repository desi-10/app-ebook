import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { colorScheme } from "nativewind";
import React from "react";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
