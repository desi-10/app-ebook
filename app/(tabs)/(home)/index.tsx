import Container from "@/components/Container";
import HeaderWrapper from "@/components/HeaderWrapper";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import books from "../../../data/const";

type Book = {
  id: number;
  name: string;
  author: string;
  image: string;
};

const IndexPage = () => {
  const colorScheme = useColorScheme();

  const categories = [
    {
      id: 1,
      name: "Church History",
      author: "Bruce Sheley",
      image: require("@/assets/images/images (7).jpg"),
    },
    {
      id: 2,
      name: "Jesus Calling",
      author: "Sarah Young",
      image: require("@/assets/images/images (8).jpg"),
    },
    {
      id: 3,
      name: "King: A Life (Pulitzer Prize Winner)",
      author: "Jonathan Eig",
      image: require("@/assets/images/images (9).jpg"),
    },
  ];

  const downloaded = [
    {
      id: 1,
      name: "Church History",
      author: "Bruce Sheley",
      image: require("@/assets/images/images (4).jpg"),
    },
    {
      id: 2,
      name: "Church History",
      author: "Bruce Sheley",
      image: require("@/assets/images/images (5).jpg"),
    },
    {
      id: 3,
      name: "Jesus Calling",
      author: "Sarah Young",
      image: require("@/assets/images/images (6).jpg"),
    },
  ];

  const recent = [
    {
      id: 1,
      name: "Time Management",
      author: "Turnip",
      image: require("@/assets/images/images (7).jpg"),
    },
    {
      id: 2,
      name: "Workers For Your Joy",
      author: "Sarah Young",
      image: require("@/assets/images/images (8).jpg"),
    },
    {
      id: 3,
      name: "Wisdom In Leadership",
      author: "Jonathan Eig",
      image: require("@/assets/images/images (9).jpg"),
    },
  ];

  const newBooks = [
    {
      id: 1,
      name: "King: A Life (Pulitzer Prize Winner)",
      author: "Jonathan Eig",
      image: require("@/assets/images/images.jpg"),
    },
    {
      id: 2,
      name: "We Who Wrestle WIth GOD",
      author: "Jordan",
      image: require("@/assets/images/images (1).jpg"),
    },
    {
      id: 3,
      name: "Knowing God",
      author: "Parker",
      image: require("@/assets/images/images (2).jpg"),
    },
  ];

  return (
    <SafeAreaView className="">
      <Container>
        <View className="mb-10">
          <HeaderWrapper>
            <View className="flex flex-row justify-between items-center py-2">
              <View className="">
                <Text className="text-sm dark:text-white">
                  Today, {new Date().toLocaleTimeString()}
                </Text>
                <Text className="text-3xl dark:text-white font-bold">
                  Hi, Desi 👋
                </Text>
                {/* time here */}
              </View>
              <View className="flex flex-row items-center">
                <Pressable
                  onPress={() => router.push("/(tabs)/(home)/notifications")}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                    className="mr-5 dark:text-white"
                  />
                </Pressable>

                <Pressable onPress={() => router.push("/(tabs)/(home)/search")}>
                  <Ionicons
                    name="search-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                    className="dark:text-white"
                  />
                </Pressable>
              </View>
            </View>
          </HeaderWrapper>

          <ScrollView
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={() => true} />
            }
            className="mb-44"
          >
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/(home)/(book)/[id]",
                  params: { id: 1 },
                })
              }
            >
              <View className="px-4 bg-purple-600 w-full flex flex-row justify-between p-5 rounded-lg">
                <View className="flex justify-between ">
                  <View>
                    <Text className="text-2xl font-bold text-white">
                      Continue Reading
                    </Text>
                    <Text className="text-lg text-white">God's Word To Us</Text>
                  </View>
                  <View>
                    <Text className=" text-white mb-2">Page 1 of 3</Text>
                    <View className="w-full bg-slate-300 rounded-lg overflow-hidden">
                      {/* Progress bar */}
                      <View className="w-[50%] h-1 bg-white"></View>
                    </View>
                  </View>
                </View>
                <View>
                  <Image
                    source={
                      typeof newBooks[0].image === "string"
                        ? { uri: newBooks[0].image }
                        : newBooks[0].image
                    }
                    className="w-36 h-36 rounded-lg"
                    resizeMode="cover"
                  />
                </View>
              </View>
            </Pressable>

            <View className="mt-5">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl dark:text-white font-bold">
                  Categories
                </Text>
                <Link href="/(tabs)/(home)/(book)">
                  <Text className="text-sm text-purple-600 dark:text-white">
                    See All
                  </Text>
                </Link>
              </View>
              <View className="flex flex-row mr-3 mt-3">
                <FlatList
                  data={categories}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View key={item.id} className="items-center mr-5">
                      <Pressable className="flex justify-center items-center hover:bg-gray-200 h-20 w-20 rounded-full">
                        <Image
                          source={{ uri: item.image }}
                          className="w-10 h-10 rounded-full"
                        />
                        <View className="mt-2 flex items-center">
                          <Text className="text-sm dark:text-white">
                            {item.name}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  )}
                />
              </View>
            </View>

            <View className="mt-5">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl dark:text-white font-bold">
                  Recommended
                </Text>
                <Link href="/(tabs)/(home)/(book)">
                  <Text className="text-sm text-purple-600 dark:text-white">
                    See All
                  </Text>
                </Link>
              </View>
              <View className="">
                <FlatList
                  data={books}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View className="w-44 mr-3 px-2 mt-5 rounded-lg overflow-hidden">
                      <Pressable
                        onPress={() =>
                          router.push({
                            pathname: `/(tabs)/(home)/(book)/[id]`,
                            params: { id: item.id },
                          })
                        }
                        className=""
                      >
                        <Image
                          source={
                            typeof item.image === "string"
                              ? { uri: item.image }
                              : item.image
                          }
                          className="h-48 w-full"
                          resizeMode="cover"
                        />
                        <View className="mt-2">
                          <Text className="font-bold text-sm dark:text-white">
                            {item.name}
                          </Text>
                          <Text className="text-xs text-gray-500">
                            {item.author}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  )}
                />
              </View>
            </View>
            <View className="mt-5">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl dark:text-white font-bold">
                  Most Downloaded
                </Text>
                <Link href="/(tabs)/(home)/(book)">
                  <Text className="text-sm text-purple-600 dark:text-white">
                    See All
                  </Text>
                </Link>
              </View>
              <View className="">
                <FlatList
                  data={downloaded}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View className="w-44 mr-3 px-2 mt-5 rounded-lg overflow-hidden">
                      <Pressable
                        onPress={() =>
                          router.push({
                            pathname: `/(tabs)/(home)/(book)/[id]`,
                            params: { id: item.id },
                          })
                        }
                        className=""
                      >
                        <Image
                          source={
                            typeof item.image === "string"
                              ? { uri: item.image }
                              : item.image
                          }
                          className="h-48 w-full"
                          resizeMode="cover"
                        />
                        <View className="mt-2">
                          <Text className="font-bold text-sm dark:text-white">
                            {item.name}
                          </Text>
                          <Text className="text-xs text-gray-500">
                            {item.author}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  )}
                />
              </View>
            </View>
            <View className="mt-5">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-2xl dark:text-white font-bold">
                  Recent
                </Text>
                <Link href="/(tabs)/(home)/(book)">
                  <Text className="text-sm text-red-500 dark:text-white">
                    See All
                  </Text>
                </Link>
              </View>
              <View className="">
                <FlatList
                  data={books}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View className="w-[50%] mr-3 px-2 mt-5 rounded-lg overflow-hidden">
                      <Pressable
                        onPress={() =>
                          router.push({
                            pathname: `/(tabs)/(home)/(book)/[id]`,
                            params: { id: item.id },
                          })
                        }
                        className=""
                      >
                        <Image
                          source={
                            typeof item.image === "string"
                              ? { uri: item.image }
                              : item.image
                          }
                          className="h-48 w-full"
                          resizeMode="cover"
                        />
                        <View className="mt-2">
                          <Text className="font-bold text-sm dark:text-white">
                            {item.name}
                          </Text>
                          <Text className="text-xs text-gray-500">
                            {item.author}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default IndexPage;
