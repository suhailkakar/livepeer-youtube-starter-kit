import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { MainVideo } from "../../types";

export default function Video({ item }: { item: MainVideo }) {
  const { navigate } = useNavigation();

  const navigateToVideo = () => {
    navigate("Video", {
      item,
    });
  };

  return (
    <Pressable onPress={navigateToVideo} style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.thumbnail}
      />
      <View style={styles.info}>
        <Image
          source={{
            uri: "https://www.hollywoodreporter.com/wp-content/uploads/2016/04/richard_hendricks_screen_shot.jpg",
          }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>
            {item.channelName} · {Math.floor(item.views / 1000)}K views ·{" "}
            {moment(item.createdAt).fromNow()}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
