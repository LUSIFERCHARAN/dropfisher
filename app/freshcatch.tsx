import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const freshItems = [
  {
    id: "1",
    name: "Fresh VANJARAM",
    image: require("../assets/vanjaram.png"),
    price: "₹850 / kg",
    tag: "🔥 Best Seller",
  },
  {
    id: "2",
    name: "Premium SUURAI",
    image: require("../assets/tuna.png"),
    price: "₹600 / kg",
    tag: "🆕 New Catch",
  },
];

export default function OceanStarPicks() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#00b894" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Ocean’s Star Picks 🌊</Text>

        {/* Invisible icon to balance layout (same width as back icon) */}
        <View style={{ width: 28 }} />
      </View>

      <Text style={styles.subText}>
        Hand-picked fresh catch delivered straight to your kitchen!
      </Text>

      <FlatList
        data={freshItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff5f5",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00b894",
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#00b894",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 110,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
  },
  tag: {
    fontSize: 13,
    color: "#d63031",
    marginTop: 4,
    marginBottom: 4,
    fontStyle: "italic",
  },
  price: {
    fontSize: 16,
    color: "#00b894",
    fontWeight: "600",
  },
});
