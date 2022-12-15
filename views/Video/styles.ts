// React native styles

import { StyleSheet } from "react-native";
import { heightToDp, widthToDp } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingTop: heightToDp(12),
  },
  infoContainer: {
    padding: heightToDp(4),
    borderBottomWidth: 0.4,
    borderBottomColor: "#333",
  },
  title: {
    fontSize: widthToDp(4.7),
    color: "#fff",
  },
  subtitle: {
    fontSize: widthToDp(3.5),
    marginTop: heightToDp(2),
    color: "gray",
  },
  channelContainer: {
    flexDirection: "row",
    padding: heightToDp(4),
    paddingTop: heightToDp(2),
    alignItems: "center",
    marginTop: heightToDp(2),
    borderBottomWidth: 0.4,
    borderBottomColor: "#333",
  },

  channelImage: {
    width: widthToDp(12),
    height: widthToDp(12),
    borderRadius: widthToDp(6),
  },
  channelInfoContainer: {
    marginLeft: widthToDp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    width: widthToDp(80),
    alignItems: "center",
  },
  channelTitle: {
    fontSize: widthToDp(4),
    color: "#fff",
  },
  channelSubtitle: {
    fontSize: widthToDp(3.5),
    color: "gray",
    marginTop: heightToDp(1),
  },
  channelButton: {
    color: "#2ECC86",
    fontSize: widthToDp(4.2),
    marginRight: widthToDp(2),
  },
});
