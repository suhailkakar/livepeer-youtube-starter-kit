import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Input({
  label,
  onChangeText,
  placeholder,
}: {
  label: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="grey"
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}
