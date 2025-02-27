import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

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
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#ff4d4d" },
  settingItem: { flexDirection: "row", alignItems: "center", padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  settingText: { fontSize: 16, marginLeft: 10, color: "#333" },
});
