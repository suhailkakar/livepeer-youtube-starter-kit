import { View, Text } from "react-native";
import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>{children}</View>
  );
}
