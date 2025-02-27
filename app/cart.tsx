import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
  const cartItems = [{ id: "1", name: "Fresh Salmon" }, { id: "2", name: "King Crab" }];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#ff4d4d" },
  cartItem: { flexDirection: "row", justifyContent: "space-between", padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  itemText: { fontSize: 16, color: "#333" },
  checkoutButton: { backgroundColor: "#ff4d4d", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
