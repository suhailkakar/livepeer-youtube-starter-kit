import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import data from "../../data.json";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ShortsPlayer from "../../components/ShortsPlayer";
import { MainVideo, ShortsVideo } from "../../types";

type DataProps = {
  item: ShortsVideo;
  index: number;
};

export default function Shorts() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  const { height: WINDOW_HEIGHT } = Dimensions.get("window");

  return (
    <FlatList
      data={data.shorts}
      pagingEnabled
      renderItem={({ item, index }: DataProps) => (
        <ShortsPlayer data={item} isActive={activeVideoIndex === index} />
      )}
      onScroll={(e) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight)
        );
        setActiveVideoIndex(index);
      }}
    />
  );
}
