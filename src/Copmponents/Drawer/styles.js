import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    backgroundColor: "#f4f4f4",
  },
  closeBtn: { alignSelf: "flex-end" },
  closeBtnText: { fontWeight: "900", fontSize: 20, paddingBottom: 10 },
  closeText: { fontSize: 30, fontWeight: "normal" },
  contentContainerStyle: {
    paddingBottom: 30,
  },
});
