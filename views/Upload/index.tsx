import React, { useEffect, useMemo, useState } from "react";
import Background from "../../components/shared/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import MediaPicker from "../../components/shared/MediaPicker";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Player, useCreateAsset } from "@livepeer/react-native";
import {
  ImagePickerAsset,
  MediaTypeOptions,
  launchImageLibraryAsync,
  ImagePickerResult,
} from "expo-image-picker";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Upload() {
  const [media, setMedia] = useState<ImagePickerResult | null>();
  const [title, setTitle] = useState<string | null>();
  const {
    mutate: createAsset,
    progress,
    error,
  } = useCreateAsset({
    // @ts-ignore (TODO: Update the types)
    sources: [{ name: title ?? "video", file: media }],
  });

  const onMediaChange = (result: ImagePickerResult) => {
    setMedia(result);
  };

  const onSubmit = async () => {
    createAsset?.();
  };

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
          placeholder="My awesome video"
          onChangeText={setTitle}
        />
        <Button onPress={onSubmit}>
          {progress?.[0]
            ? `${progress?.[0]?.phase} - ${(
                progress?.[0]?.progress * 100
              ).toFixed()}%`
            : "Upload"}
        </Button>
        {error && <Text>Error: {error.message}</Text>}
      </SafeAreaView>
    </Background>
  );
}
