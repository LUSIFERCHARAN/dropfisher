import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCartStore } from "./fish/cartStore"; // Ensure correct path

export default function CartScreen() {
  const navigation = useNavigation(); // Navigation object
  const cart = useCartStore((state) => state.items); // Get cart items
  const removeFromCart = useCartStore((state) => state.removeFromCart); // Remove function
  const addToCart = useCartStore((state) => state.addToCart); // Add quantity

  // Function to handle item removal with confirmation
  const handleRemoveItem = (id: string, name: string) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove "${name}" from the cart?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => removeFromCart(id), style: "destructive" },
      ]
    );
  };
  

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>🛒 Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.details}>{item.weight} · {item.cutType}</Text>
                  <Text style={styles.price}>₹ {item.price} x {item.quantity}</Text>

                  {/* Quantity Controls */}
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => item.quantity > 1 ? removeFromCart(item.id) : handleRemoveItem(item.id, item.name)}
                    >
                      <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantity}>{item.quantity}</Text>

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => addToCart({ ...item, quantity: 1 })}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Delete Button with Alert */}
                <TouchableOpacity onPress={() => handleRemoveItem(item.id, item.name)}>
                  <Text style={styles.removeText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          {/* Checkout Section */}
          <View style={styles.checkoutContainer}>
            <Text style={styles.totalText}>Total: ₹ {totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },

  // Back Button
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  backText: { fontSize: 18, fontWeight: "bold", color: "#ff6b6b" },

  header: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  emptyText: { fontSize: 18, color: "#777", textAlign: "center", marginTop: 50 },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: "bold", color: "#333" },
  details: { fontSize: 14, color: "#666" },
  price: { fontSize: 16, fontWeight: "bold", marginTop: 5, color: "#000" },
  removeText: { fontSize: 18, color: "red", marginLeft: 10 },

  // Quantity Controls
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },
  quantityButton: { paddingHorizontal: 10, paddingVertical: 5 },
  quantityText: { fontSize: 20, fontWeight: "bold" },
  quantity: { fontSize: 18, fontWeight: "bold", marginHorizontal: 10 },

  // Checkout
  checkoutContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
  totalText: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  checkoutButton: {
    backgroundColor: "#ff6b6b",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});
