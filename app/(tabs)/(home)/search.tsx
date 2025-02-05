import React, { useEffect, useRef } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Container from "@/components/Container";
import HeaderWrapper from "@/components/HeaderWrapper";

const Search = () => {
  const theme = useColorScheme();
  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <SafeAreaView>
      <Container>
        <HeaderWrapper>
          <View className="flex flex-row items-center py-3">
            <TouchableOpacity
              onPress={() => router.back()}
              accessible
              accessibilityLabel="Go back"
              className="p-2"
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={theme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
            <TextInput
              ref={inputRef}
              placeholder="Search"
              placeholderTextColor={theme === "dark" ? "#A0A0A0" : "#707070"}
              keyboardType="default"
              returnKeyType="search"
              className={`flex-1 border px-4 py-3 rounded-lg mx-4 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
            />
          </View>
        </HeaderWrapper>
      </Container>
    </SafeAreaView>
  );
};

export default Search;
