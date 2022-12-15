import Routes from "./routes";
import {
  createReactClient,
  studioProvider,
  LivepeerConfig,
} from "@livepeer/react-native";
import { StatusBar } from "expo-status-bar";

const client = createReactClient({
  provider: studioProvider({ apiKey }),
});

export default function App() {
  return (
    <LivepeerConfig client={client}>
      <StatusBar style="light" />
      <Routes />
    </LivepeerConfig>
  );
}
