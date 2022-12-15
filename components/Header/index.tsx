import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Header({
  onChangeText,
}: {
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.ibb.co/gWMxXM4/logo-1.png",
        }}
        style={styles.logo}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="grey"
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}
