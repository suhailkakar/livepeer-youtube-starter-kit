import { Pressable, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Button({
  onPress,
  children,
}: {
  onPress: () => void;
  children: React.ReactNode;
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  );
}
