import { View, Text, Image, FlatList } from "react-native";
import React, { useMemo } from "react";
import Background from "../../components/shared/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { Player } from "@livepeer/react-native";
import { styles } from "./styles";
import data from "../../data.json";
import moment from "moment";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Video({ route }: { route: any }) {
  const item = route.params.item;
  const navigation = useNavigation();
  return (
    <Background>
      <SafeAreaView>
        <StatusBar style="light" />
        <Player
          showTitle={false}
          title={item.name}
          playbackId={item.playbackId}
          aspectRatio="16to9"
          autoPlay={true}
        />
        <Feather
          name="chevron-left"
          size={24}
          onPress={() => navigation.goBack()}
          color="white"
          style={{
            position: "absolute",
            top: 60,
            left: 10,
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>
            {Math.floor(item.views / 1000)}K views ·{" "}
            {moment(item.createdAt).fromNow()}
          </Text>
        </View>
        <View style={styles.channelContainer}>
          <Image
            source={{
              uri: item.channelImage,
            }}
            style={styles.channelImage}
          />
          <View style={styles.channelInfoContainer}>
            <View>
              <Text style={styles.channelTitle}>{item.channelName}</Text>
              <Text style={styles.channelSubtitle}>4.6K subscribers</Text>
            </View>
            <Text style={styles.channelButton}>Subscribe</Text>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}
