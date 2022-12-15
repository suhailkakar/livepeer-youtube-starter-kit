import { View, Text } from "react-native";
import React, { useState } from "react";
import Background from "../../components/shared/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import MediaPicker from "../../components/shared/MediaPicker";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import uploadMediaToIPFS from "../../lib/saveToIPFS";
import { useCreateAsset } from "@livepeer/react-native";

type Loading = {
  isLoading: boolean;
  status?: string;
};

export default function Upload() {
  const [media, setMedia] = useState<ImagePicker.ImagePickerResult>();
  const [title, setTitle] = useState<string>();
  const [loading, setLoading] = useState<Loading>();
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    // we use a `const` assertion here to provide better Typescript types
    // for the returned data
    {
      sources: [{ name: title, file: media?.uri }] as const,
    }
  );

  const onMediaChange = (result: ImagePicker.ImagePickerResult) => {
    setMedia(result);
  };

  const onSubmit = async () => {
    createAsset?.();
  };

  const generateThumbnail = async (uri: string) => {};

  return (
    <Background>
      <SafeAreaView
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <MediaPicker onChange={onMediaChange} />
        <Input
          label="Title"
          placeholder="Never gonna give you up"
          onChangeText={setTitle}
        />
        <Button onPress={onSubmit}>Upload</Button>
      </SafeAreaView>
    </Background>
  );
}
