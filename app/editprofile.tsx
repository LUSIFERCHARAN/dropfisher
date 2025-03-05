import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("Lakshmanan");
  const [email, setEmail] = useState("lakshmanan12102003@example.com");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff5f5" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backButton: { padding: 5, marginRight: 10 },
  title: { fontSize: 28, fontWeight: "bold", color: "#ff4d4d" },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 8, marginBottom: 10, fontSize: 16 },
  button: { backgroundColor: "#ff4d4d", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
