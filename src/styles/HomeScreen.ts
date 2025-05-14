import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  activityIndicator: { flex: 1, alignItems: "center" },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    backgroundColor: "#007AFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
});

export default styles;
