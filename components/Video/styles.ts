// React native styles

import { StyleSheet } from "react-native";
import { heightToDp, width, widthToDp } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {},
  thumbnail: {
    width: "100%",
    height: heightToDp(60),
  },
  info: {
    margin: widthToDp(3),
    marginBottom: widthToDp(5),
    flexDirection: "row",
  },
  title: {
    fontSize: widthToDp(4.2),
    color: "#fff",
    width: widthToDp(80),
  },
  subtitle: {
    fontSize: widthToDp(3.5),
    color: "gray",
    marginTop: widthToDp(2),
  },
  avatar: {
    width: widthToDp(10),
    height: widthToDp(10),
    borderRadius: widthToDp(5),
  },
  textContainer: {
    marginLeft: widthToDp(3),
  },
});
