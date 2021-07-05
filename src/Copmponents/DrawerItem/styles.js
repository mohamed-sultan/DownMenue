import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  expandableText: {
    fontSize: 17,
    fontWeight: "600",
    backgroundColor: "#eee",
    padding: 8,
    margin: 4,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  SibilingsWrapper: {
    paddingHorizontal: 10,
    margin: 8,
  },
  ParentWrapper: {
    paddingHorizontal: 0,
  },
  sibilingText: { fontWeight: "500", fontSize: 17 },
  text: { fontSize: 14, fontWeight: "bold" },
  textBold: { fontSize: 24, fontWeight: "bold" },
});
