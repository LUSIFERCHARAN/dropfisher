import { useRouter } from "expo-router";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  FlatList, 
  TouchableWithoutFeedback, 
  SafeAreaView 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";

export default function Home() {
  const router = useRouter();

  const categories = [
    { id: "1", name: "Fish", image: require("../assets/fish.png") },
    { id: "2", name: "Shrimp", image: require("../assets/shrimp.png") },
    { id: "3", name: "Crab", image: require("../assets/crab.png") },
    { id: "4", name: "Lobster", image: require("../assets/lobster.png") },
    { id: "5", name: "Oysters", image: require("../assets/oysters.png") },
    { id: "6", name: "Squid", image: require("../assets/squid.png") },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
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

        {/* Promo Section with Video */}
        <View style={styles.promoContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Video
              source={require("../assets/video.mp4")}
              style={styles.promoVideo}
              shouldPlay
              isLooping
            />
          </TouchableWithoutFeedback>
        </View>

        {/* Category Grid */}
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.categoryItem} 
              onPress={() => {
                if (item.name === "Fish") {
                  router.push("/fish/fishList");
                } else if (item.name === "Shrimp") {
                  router.push("/fish/shrimplist");
                } else {
                  router.push("/fish/fishList");
                }
              }}
            >
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#fff5f5" },
  container: { flex: 1, padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 50 },
  title: { fontSize: 25, fontWeight: "bold", color: "#ff4d4d" },
  promoContainer: { alignItems: "center", marginBottom: 40 },
  promoVideo: { width: "100%", height: 200, borderRadius: 15 },
  categoryItem: { flex: 1, alignItems: "center", padding: 12, margin: 5, borderWidth: 1.5, borderColor: "#ff4d4d", borderRadius: 12, backgroundColor: "#fff", width: "30%", aspectRatio: 1, justifyContent: "center" },
  categoryImage: { width: 80, height: 70, borderRadius: 12, marginBottom: 8, resizeMode: "contain" },
  categoryText: { color: "#ff4d4d", fontSize: 15, fontWeight: "bold", textAlign: "center" },
  customOrder: { backgroundColor: "#ff4d4d", padding: 15, borderRadius: 12, alignItems: "center", marginVertical: 20 },
  customText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 5, borderTopWidth: 1, borderColor: "#ddd" },
});

