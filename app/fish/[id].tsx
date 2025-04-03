import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useCartStore } from "../../app/fish/cartStore";  // ✅ Import Cart Store

const allData = {
  "1": { name: "VANJARAM", image: require("../../assets/vanjaram.png"), pricePerKg: 850 },
  "2": { name: "SHELLA", image: require("../../assets/bar.png"), pricePerKg: 480 },
  "3": { name: "KARUPU VAVVAL", image: require("../../assets/black-promfet.png"), pricePerKg: 520 },
  "4": { name: "VELLAI VAVAAL", image: require("../../assets/wpomfret.png"), pricePerKg: 560 },
  "5": { name: "SUURAI", image: require("../../assets/tuna.png"), pricePerKg: 420 },
  "6": { name: "PAARAI", image: require("../../assets/parai.png"), pricePerKg: 500 },
  "shrimp-1": { name: "JUMBO SHRIMP", image: require("../../assets/whiteprawn.png"), pricePerKg: 780 },
  "shrimp-2": { name: "MEDIUM SHRIMP", image: require("../../assets/orangeprawn.png"), pricePerKg: 600 },
  "shrimp-3": { name: "WHITE SHRIMP", image: require("../../assets/tigerprawn.png"), pricePerKg: 520 },
  "shrimp-4": { name: "TIGER PRAWN", image: require("../../assets/greenprawn.png"), pricePerKg: 890 },
  "crab-1": { name: "GREEN CRAB", image: require("../../assets/greencrab.png"), pricePerKg: 450 },
  "crab-2": { name: "BLUE CRAB", image: require("../../assets/bluecrab.png"), pricePerKg: 550 },
  "crab-3": { name: "ORANGE CRAB", image: require("../../assets/orangecrab.png"), pricePerKg: 350 },
};

export default function FishDetail() {
  const { id } = useLocalSearchParams();
  const fishId = Array.isArray(id) ? id[0] : id ?? "";
  const fish = allData[fishId as keyof typeof allData];
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);  // ✅ Get addToCart function

  const [weight, setWeight] = useState("1kg");
  const [cutType, setCutType] = useState("Cut & Cleaned");
  const [quantity, setQuantity] = useState(1);

  const getPrice = () => {
    let weightFactor = {
      "240g": 0.24,
      "500g": 0.5,
      "750g": 0.75,
      "1kg": 1,
      "2kg": 2,
      "3kg": 3,
      "5kg": 5,
    }[weight] || 1;

    return (fish.pricePerKg * weightFactor * quantity).toFixed(0);
  };

  if (!fish) return <Text style={{ marginTop: 100 }}>Fish not found</Text>;

  const handleAddToCart = () => {
    addToCart({
      id: fishId,
      name: fish.name,
      image: fish.image,
      weight,
      cutType,
      quantity,
      price: parseInt(getPrice(), 10),
    });
    alert("Added to Cart! 🛒");
  };

  return (
    <LinearGradient colors={["#ffe4e6", "#fcdada", "#fff1f2"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} locations={[0, 0.5, 1]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#222" />
          </TouchableOpacity>
          <View style={styles.iconGroup}>
            <Feather name="heart" size={24} color="#ff4d4d" style={styles.icon} />
            <Feather name="share-2" size={24} color="#222" style={styles.icon} />
          </View>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <Image source={fish.image} style={styles.image} />
          <Text style={styles.name}>{fish.name}</Text>
          <Text style={styles.metaText}>
            <AntDesign name="star" size={16} color="#facc15" /> 4.8 · 2.1k Reviews · 3.2k Sold
          </Text>

          <Text style={styles.label}>Select Weight</Text>
          <View style={styles.optionRow}>
            {["240g", "500g", "750g", "1kg", "2kg", "3kg", "5kg"].map((w) => (
              <TouchableOpacity key={w} style={[styles.optionBtn, weight === w && styles.activeBtn]} onPress={() => setWeight(w)}>
                <Text style={[styles.optionText, weight === w && styles.activeText]}>{w}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Cut Preference</Text>
          <View style={styles.optionRow}>
            {["Cut & Cleaned", "Fillet", "Whole"].map((cut) => (
              <TouchableOpacity key={cut} style={[styles.optionBtn, cutType === cut && styles.activeBtn]} onPress={() => setCutType(cut)}>
                <Text style={[styles.optionText, cutType === cut && styles.activeText]}>{cut}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Quantity</Text>
          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
              <Ionicons name="remove-circle-outline" size={32} color="#ff4d4d" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Ionicons name="add-circle-outline" size={32} color="#ff4d4d" />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View>
            <Text style={styles.totalLabel}>Total Price</Text>
            <Text style={styles.totalPrice}>₹ {getPrice()}</Text>
          </View>
          <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

  const styles = StyleSheet.create({
    container: { flex: 1 },
    topBar: {
      flexDirection: "row", justifyContent: "space-between",
      alignItems: "center", padding: 20,
    },
    iconGroup: { flexDirection: "row" },
    icon: { marginLeft: 16 },
    image: {
      width: "100%", height: 280,
      resizeMode: "contain", backgroundColor: "#fff0f3", borderRadius: 12,
    },
    name: {
      fontSize: 26, fontWeight: "bold",
      marginTop: 15, marginHorizontal: 20, color: "#111",
    },
    metaText: {
      fontSize: 14, color: "#777",
      marginHorizontal: 20, marginTop: 5,
    },
    label: {
      fontSize: 16, color: "#555",
      marginTop: 25, marginBottom: 10, marginHorizontal: 20,
    },
    optionRow: {
      flexDirection: "row", flexWrap: "wrap",
      gap: 10, marginHorizontal: 20,
    },
    optionBtn: {
      borderWidth: 1, borderColor: "#ccc",
      borderRadius: 20, paddingVertical: 6,
      paddingHorizontal: 14, marginBottom: 10,
    },
    activeBtn: {
      backgroundColor: "#ff4d4d", borderColor: "#ff4d4d",
    },
    optionText: {
      fontSize: 14, color: "#555",
    },
    activeText: {
      color: "#fff",
    },
    qtyContainer: {
      flexDirection: "row", alignItems: "center",
      justifyContent: "center", gap: 20, marginVertical: 15,
    },
    qtyText: {
      fontSize: 22, fontWeight: "bold", color: "#222",
    },
    footer: {
      position: "absolute", bottom: 0, left: 0, right: 0,
      flexDirection: "row", justifyContent: "space-between",
      alignItems: "center", padding: 20,
      backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#eee",
    },
    totalLabel: {
      fontSize: 14, color: "#888",
    },
    totalPrice: {
      fontSize: 22, fontWeight: "bold", color: "#222",
    },
    cartBtn: {
      backgroundColor: "#ff4d4d",
      paddingVertical: 14, paddingHorizontal: 30,
      borderRadius: 30,
    },
    cartText: {
      color: "#fff", fontWeight: "bold", fontSize: 16,
    },
  });
  