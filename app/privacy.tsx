import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Privacy() {
  const [notifications, setNotifications] = useState(false);
  const [location, setLocation] = useState(false);
  const [media, setMedia] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>Privacy & Security</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Allow Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={() => setNotifications(!notifications)}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Enable Location Access</Text>
          <Switch
            value={location}
            onValueChange={() => setLocation(!location)}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Allow Media Access</Text>
          <Switch
            value={media}
            onValueChange={() => setMedia(!media)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff5f5" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backButton: { padding: 5, marginRight: 10 },
  title: { fontSize: 28, fontWeight: "bold", color: "#ff4d4d" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 20
  },
  option: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  optionText: { fontSize: 18, color: "#333" },
  button: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});