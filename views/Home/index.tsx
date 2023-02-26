import { FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import data from "../../data.json";
import Video from "../../components/Video";
import Header from "../../components/Header";
import { styles } from "./styles";
import Background from "../../components/shared/Background";
import { MainVideo } from "../../types";

export default function Home() {
  const [videos, setVideos] = useState(data.main);

  const handleSearch = (text: string) => {
    const filteredVideos = data.main.filter((video) =>
      video.name.toLowerCase().includes(text.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  const renderItem = useMemo(
    () =>
      ({ item }: { item: MainVideo }) =>
        <Video item={item} />,
    []
  );

  const renderHeader = useMemo(
    () => <Header onChangeText={handleSearch} />,
    []
  );

  return (
    <Background>
      <FlatList
        data={videos.main}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ListHeaderComponent={renderHeader}
      />
    </Background>
  );
}
