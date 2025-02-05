import { View, Text } from "react-native";
import React from "react";

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <View className="py-5">{children}</View>;
};

export default HeaderWrapper;
