import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FishList() {
  const router = useRouter();

  const fishes = [
    { id: "1", name: "WHITE PRAWN", image: require("../../assets/whiteprawn.png") },
    { id: "2", name: "ORANGE PRAWN", image: require("../../assets/orangeprawn.png") },
    { id: "2", name: "TIGER PRAWN", image: require("../../assets/tigerprawn.png") },
    { id: "3", name: "GREEN PRAWN", image: require("../../assets/greenprawn.png") },
    

  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>Select Your Fish</Text>
        <TouchableOpacity onPress={() => router.push("/cart")}>
          <Ionicons name="cart-outline" size={30} color="#ff4d4d" />
        </TouchableOpacity>
      </View>

      {/* Fish List */}
      <FlatList
        data={fishes}
        numColumns={2} // 2 items in a row
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.fishItem} 
          >
            <Image source={item.image} style={styles.fishImage} />
            <Text style={styles.fishText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff5f5", 
    paddingHorizontal: 15,
    paddingTop: 30, 
  },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 20,
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#ff4d4d", 
  },
  row: {
    justifyContent: "space-between", 
    marginBottom: 15, 
  },
  fishItem: { 
    width: "48%", // Makes the box square while keeping spacing
    aspectRatio: 1, // Ensures it's a square
    backgroundColor: "#fff", 
    borderRadius: 15, 
    borderWidth: 2, 
    borderColor: "#ff4d4d", 
    alignItems: "center", 
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  fishImage: { 
    width: "100%", // Adjusted for square box
    height: "70%", 
    resizeMode: "contain", 
  },
  fishText: { 
    fontSize: 17, 
    fontWeight: "bold", 
    color: "#ff4d4d", 
    textAlign: "center",
    marginTop: 5,
  },
});
