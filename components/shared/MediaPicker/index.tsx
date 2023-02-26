import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  ImagePickerAsset,
  MediaTypeOptions,
  launchImageLibraryAsync,
  ImagePickerResult,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";

import { Video } from "expo-av";

export default function MediaPicker({
  onChange,
}: {
  onChange: (result: ImagePickerResult) => void;
}) {
  const [video, setVideo] = useState<ImagePickerResult>();

  const pickVideo = async () => {
    if (!video) {
      const { status } = await requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Videos,
        allowsEditing: true,
      });

      if (!result.cancelled) {
        onChange(result);
        setVideo(result);
      }
    }
  };

  return (
    <Pressable onPress={pickVideo} style={styles.container}>
      {video?.assets ? (
        <Video
          source={{ uri: video.assets[0].uri }}
          shouldPlay
          isLooping
          style={styles.video}
        />
      ) : (
        <Text style={styles.text}>Select a video to upload</Text>
      )}
    </Pressable>
  );
}
