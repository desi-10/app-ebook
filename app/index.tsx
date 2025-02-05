import { Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const OnboardingScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex h-screen items-center justify-center">
        <Text className="dark:text-white text-black text-4xl mb-3">
          Onboarding
        </Text>

        <Pressable
          onPress={() => router.replace("/(tabs)/(home)")}
          className="bg-blue-500 rounded-md p-3 text-white"
        >
          <Text>Go to Home Screen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
