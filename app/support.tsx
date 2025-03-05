import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Support() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Ionicons name="arrow-back" size={28} color="#ff4d4d" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Help & Support</Text>
      </View>

      {/* Support Content */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Frequently Asked Questions</Text>
        <Text style={styles.cardText}>Get answers to common queries instantly.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Live Chat Support</Text>
        <Text style={styles.cardText}>Chat with our support team 24/7.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Email Us</Text>
        <Text style={styles.cardText}>support@dropfisher.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff5f5" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  icon: { marginRight: 10 },
  title: { fontSize: 28, fontWeight: "bold", color: "#ff4d4d" },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 15, marginBottom: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5 },
  cardTitle: { fontSize: 20, fontWeight: "bold", color: "#ff4d4d" },
  cardText: { fontSize: 16, color: "#555", marginTop: 5 },
});
