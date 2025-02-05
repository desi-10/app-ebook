import { View } from "react-native";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <View className="px-4 h-screen">{children}</View>;
};

export default Container;
