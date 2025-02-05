import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";

const BookDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const image = require("@/assets/images/images.jpg");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          className="w-full h-64"
          resizeMode="cover"
        />
      }
    >
      <View className="p-4">
        <View className="flex-row justify-between items-start">
          <View className="flex-1">
            <Text className="text-white text-xl font-bold">
              A Winter in New York
            </Text>
            <Text className="text-gray-400">Josie Silver</Text>
          </View>

          {/* Bookmark Button */}
          <Pressable onPress={() => setIsBookmarked(!isBookmarked)}>
            <MaterialIcons
              name={isBookmarked ? "bookmark" : "bookmark-border"}
              size={24}
              color="gold"
            />
          </Pressable>
        </View>

        {/* Rating */}
        <View className="flex-row items-center mt-1">
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star" size={18} color="#FFD700" />
          <FontAwesome name="star-half" size={18} color="#FFD700" />
          <Text className="ml-2 text-gray-300 text-sm">4.25</Text>
        </View>

        {/* Description */}
        <Text className="text-gray-300 mt-3">
          {showMore
            ? "A young chef stumbles on a secret family recipe that might lead her to the love—and life—she’s been looking for in this stunning novel."
            : "A young chef stumbles on a secret family recipe that..."}
        </Text>

        {/* Show More Toggle */}
        <Pressable onPress={() => setShowMore(!showMore)}>
          <Text className="text-yellow-400 mt-1">
            {showMore ? "Show less ▲" : "Show more ▼"}
          </Text>
        </Pressable>

        {/* Buttons */}
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="bg-purple-600 px-4 py-3 rounded-lg flex-1 mr-2">
            <Text className="text-white text-center font-bold">
              📖 Read now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-700 px-4 py-3 rounded-lg flex-1 ml-2">
            <Text className="text-white text-center font-bold">⭐ Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default BookDetails;
