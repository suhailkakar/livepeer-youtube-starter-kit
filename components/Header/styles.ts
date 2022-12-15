// React native styles

import { StyleSheet } from "react-native";
import { heightToDp, width, widthToDp } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    margin: widthToDp(3),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: widthToDp(5),
  },
  logo: {
    width: widthToDp(8),
    height: heightToDp(8),
  },
  input: {
    width: widthToDp(80),
    backgroundColor: "#2b2b2b",
    borderRadius: widthToDp(1),
    marginLeft: widthToDp(4),
    color: "#fff",
    padding: widthToDp(2.3),
  },
});
