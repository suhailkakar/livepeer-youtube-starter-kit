// React native styles

import { StyleSheet } from "react-native";
import { heightToDp } from "../../../utils/responsive";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2ECC86",
    padding: heightToDp(4),
    borderRadius: heightToDp(2),
    alignItems: "center",
    marginTop: heightToDp(10),
    justifyContent: "center",
  },
});
