import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av"; 
export default function Home() {
  const router = useRouter();

  const categories = [
    { id: "1", name: "Fish", image: require("../assets/fish.png") },
    { id: "2", name: "Shrimp", image: require("../assets/shrimp.png") },
    { id: "3", name: "Crab" ,image: require("../assets/crab.png")},
    { id: "4", name: "Lobster",image: require("../assets/lobster.png")},
    { id: "5", name: "Oysters",image: require("../assets/oysters.png") },
    { id: "6", name: "Squid",image: require("../assets/squid.png") },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>DropFisher</Text>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Ionicons name="person-circle-outline" size={30} color="#ff4d4d" />
        </TouchableOpacity>
      </View>

      {/* Promo Section */}
      {/* Promo Section with Video */}
{/* Promo Section with Video */}
<View style={styles.promoContainer}>
  <Video
    source={require("../assets/video.mp4")} // Load local video
    style={styles.promoVideo} // Apply styling
    shouldPlay // Auto-play on load
    isLooping // Enable looping
    useNativeControls={true} // Show play/pause controls
  />
</View>


      {/* Category Grid */}
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            {/* Show image only for Fish and Shrimp */}
            {item.image && <Image source={item.image} style={styles.categoryImage} />}
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Custom Order Section */}
      <TouchableOpacity style={styles.customOrder}>
        <Text style={styles.customText}>Compose Your Own Meal</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Ionicons name="home" size={28} color="#ff4d4d" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/search")}>
          <Ionicons name="search" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/cart")}>
          <Ionicons name="cart" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <Ionicons name="settings" size={28} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff4d4d",
  },
  promoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  promoVideo: {
    width: "100%",
    height: 200, // Adjust height for proper view
    borderRadius: 15,
  },
  
  promoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    margin: 5,
    borderWidth: 1.5,
    borderColor: "#ff4d4d",
    borderRadius: 12,
    backgroundColor: "#fff",
    width: "30%",
    aspectRatio: 1, // Maintains square shape
    justifyContent: "center",
  },
  categoryImage: {
    width: 70, // Increased size for zoom effect
    height: 70,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: "contain",
  },
  
  categoryText: {
    color: "#ff4d4d",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  customOrder: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  customText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});