import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LanguageList } from "./src/LanguageList/LanguageList";

export default function App() {
  return (
    <View style={styles.container}>
      <LanguageList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginBottom: 50,
  },
});
