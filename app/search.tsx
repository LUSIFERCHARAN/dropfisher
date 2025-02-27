import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const results = ["Salmon", "Shrimp", "Lobster", "Crab", "Tuna"].filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={24} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Search seafood..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Text style={styles.resultText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  searchBar: { flexDirection: "row", alignItems: "center", backgroundColor: "#eee", borderRadius: 10, padding: 10, marginBottom: 20 },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  resultItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  resultText: { fontSize: 16, color: "#333" },
});
