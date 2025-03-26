// app/wishlist.tsx
import { View, Text, StyleSheet } from "react-native";

export default function Wishlist() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Wishlist is empty!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff5f5" },
  text: { fontSize: 20, color: "#ff4d4d", fontWeight: "bold" }
});
