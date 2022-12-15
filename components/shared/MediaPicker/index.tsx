import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";

export default function MediaPicker({
  onChange,
}: {
  onChange: (result: ImagePicker.ImagePickerResult) => void;
}) {
  const [video, setVideo] = useState<ImagePicker.ImagePickerResult>();

  const pickVideo = async () => {
    if (!video) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        onChange(result);
        setVideo(result);
      }
    }
  };

  return (
    <Pressable onPress={pickVideo} style={styles.container}>
      {video?.uri ? (
        <Video
          source={{ uri: video?.uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          shouldPlay
          useNativeControls={true}
          isLooping
          style={styles.video}
        />
      ) : (
        <Text style={styles.text}>Select a video to upload</Text>
      )}
    </Pressable>
  );
}
