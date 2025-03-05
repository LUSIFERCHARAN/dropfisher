import { 
  View, TextInput, FlatList, Text, StyleSheet, 
  TouchableOpacity, Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

// Sample seafood data (from Home's Fish section)
const seafoodItems = [
  { id: "1", name: "Vanjaram", category: "Fish" },
  { id: "2", name: "Salmon", category: "Fish" },
  { id: "3", name: "Shrimp", category: "Shellfish" },
  { id: "4", name: "Lobster", category: "Shellfish" },
  { id: "5", name: "Crab", category: "Shellfish" },
  { id: "6", name: "Tuna", category: "Fish" },
];

export default function Search() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState<string[]>([]);

  // Filtered search results
  const results = seafoodItems.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Add item to cart
  const handleAddToCart = (itemName: string) => {
    if (!cart.includes(itemName)) {
      setCart([...cart, itemName]);
      Alert.alert("Added to Cart", `${itemName} has been added!`);
    } else {
      Alert.alert("Already in Cart", `${itemName} is already added.`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#ff4d4d" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={24} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Search seafood..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Search Results */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name} ({item.category})</Text>
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={() => handleAddToCart(item.name)}
            >
              <Text style={styles.addButtonText}>+ Add</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          searchText ? <Text style={styles.noResults}>No items found.</Text> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  backButton: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  backText: { fontSize: 16, color: "#ff4d4d", marginLeft: 5 },
  searchBar: { 
    flexDirection: "row", alignItems: "center", 
    backgroundColor: "#eee", borderRadius: 10, 
    padding: 10, marginBottom: 20 
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  resultItem: { 
    flexDirection: "row", justifyContent: "space-between", 
    alignItems: "center", padding: 15, 
    borderBottomWidth: 1, borderBottomColor: "#ddd" 
  },
  resultText: { fontSize: 16, color: "#333" },
  addButton: { backgroundColor: "#ff4d4d", padding: 8, borderRadius: 5 },
  addButtonText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  noResults: { textAlign: "center", marginTop: 20, fontSize: 16, color: "#999" },
});
