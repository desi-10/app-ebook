import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import Container from "@/components/Container";
import { router, useNavigation } from "expo-router";

const ReaderScreen = () => {
  const [highlightedText, setHighlightedText] = useState("");
  const [highlightColor, setHighlightColor] = useState("#FFD700"); // Default color
  const colorScheme = useColorScheme();

  const text = `One afternoon of a cold winter's day, when the sun shone forth with chilly brightness, after a long storm, two children asked leave of their mother to run out and play in the new-fallen snow. The elder child was a little girl, whom, because she was of a tender and modest disposition, and was thought to be very beautiful, her parents, and other people who were familiar with her, used to call Violet.\n\nBut her brother was known by the style and title of Peony, on account of the ruddiness of his broad and ...`;

  return (
    <SafeAreaView>
      <Container>
        <View className="relative h-screen dark:text-white">
          {/* Top Navbar */}
          <View className="flex-row justify-between items-center px-4 py-4 ">
            <Pressable onPress={() => router.back()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </Pressable>
            <TouchableOpacity>
              <Ionicons
                name="bookmark-outline"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>

          {/* Book Content */}
          <ScrollView className="px-6 py-4">
            <Text className="text-orange-500 text-sm font-medium">
              Chapter 1
            </Text>
            <Text className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              The Beginning
            </Text>

            <Text className="text-gray-800 dark:text-white mt-4 leading-7">
              {text.split(" ").map((word, index) => (
                <Text
                  key={index}
                  className={`${
                    highlightedText.includes(word) ? "bg-yellow-300" : ""
                  }`}
                  onPress={() => setHighlightedText(word)}
                >
                  {word}
                </Text>
              ))}
            </Text>
          </ScrollView>

          {highlightedText && (
            <View className="absolute bottom-20 left-6 right-6 bg-white shadow-md rounded-xl p-3 flex-row justify-between items-center">
              {[
                "#FF0000",
                "#FF8000",
                "#FFD700",
                "#008000",
                "#0000FF",
                "#800080",
              ].map((color) => (
                <TouchableOpacity
                  key={color}
                  onPress={() => setHighlightColor(color)}
                >
                  <View
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={() => setHighlightedText("")}>
                <Feather name="x-circle" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          )}

          <View className="absolute bottom-10 left-0 right-0 flex-row justify-between items-center px-6 py-4 ">
            <Pressable>
              <Feather name="settings" size={24} color="gray" />
            </Pressable>
            <View className="flex-1 mx-4 bg-gray-300 h-2 rounded-full">
              <View className="bg-orange-500 h-2 rounded-full w-3/4"></View>
            </View>
            <Text className="text-gray-600 font-medium">76%</Text>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default ReaderScreen;
