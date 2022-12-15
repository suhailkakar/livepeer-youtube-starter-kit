// React native styles

import { StyleSheet } from "react-native";
import { heightToDp } from "../../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingTop: heightToDp(5),
  },
  label: {
    color: "gray",
    fontSize: heightToDp(3.8),
  },
  input: {
    color: "#fff",
    backgroundColor: "#1e1e1e",
    padding: heightToDp(3),
    borderRadius: heightToDp(1),
    marginTop: heightToDp(2),
  },
});
