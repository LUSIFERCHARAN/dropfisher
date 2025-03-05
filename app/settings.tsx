import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="notifications-outline" size={24} color="#ff4d4d" />
        <Text style={styles.settingText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="language-outline" size={24} color="#ff4d4d" />
        <Text style={styles.settingText}>Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="lock-closed-outline" size={24} color="#ff4d4d" />
        <Text style={styles.settingText}>Privacy & Security</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="help-circle-outline" size={24} color="#ff4d4d" />
        <Text style={styles.settingText}>Help & Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff5f5", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backButton: { padding: 5, marginRight: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#ff4d4d" },
  settingItem: { flexDirection: "row", alignItems: "center", padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  settingText: { fontSize: 16, marginLeft: 10, color: "#333" },
});
