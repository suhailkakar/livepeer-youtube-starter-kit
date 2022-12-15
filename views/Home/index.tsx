import { FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import data from "../../data.json";
import Video from "../../components/Video";
import Header from "../../components/Header";
import { styles } from "./styles";
import Background from "../../components/shared/Background";

export default function Home() {
  const [videos, setVideos] = useState(data);

  const handleSearch = (text: string) => {
    const filteredVideos = data.filter((video) =>
      video.name.toLowerCase().includes(text.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  const renderItem = useMemo(
    () =>
      ({ item }) =>
        <Video item={item} />,
    []
  );

  const keyExtractor = useMemo(() => (item) => item.id, []);

  const renderHeader = useMemo(
    () => <Header onChangeText={handleSearch} />,
    []
  );

  return (
    <Background>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
        ListHeaderComponent={renderHeader}
      />
    </Background>
  );
}
