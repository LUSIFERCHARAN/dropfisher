import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function Profile() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLogout = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const confirmLogout = () => {
    setModalVisible(false);
    router.replace("/");
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const navigateToSettings = () => {
    router.push("/settings");
  };

  const navigateToPrivacy = () => {
    router.push("/privacy");
  };

  const navigateToSupport = () => {
    router.push("/support");
  };

  const navigateToEditProfile = () => {
    router.push("/editprofile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/home")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <Image source={require("../assets/photo.png")} style={styles.profileImage} />
        <Text style={styles.name}>LAKSHMANAN</Text>
        <Text style={styles.email}>lakshmanan12102003@example.com</Text>

        <TouchableOpacity style={styles.editProfileButton} onPress={navigateToEditProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem} onPress={navigateToSettings}>
          <Ionicons name="settings-outline" size={24} color="#ff4d4d" />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={navigateToPrivacy}>
          <Ionicons name="lock-closed-outline" size={24} color="#ff4d4d" />
          <Text style={styles.optionText}>Privacy & Security</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={navigateToSupport}>
          <Ionicons name="help-circle-outline" size={24} color="#ff4d4d" />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="none">
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalCancelButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalConfirmButton} onPress={confirmLogout}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff5f5", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backButton: { padding: 5, marginRight: 10 },
  title: { fontSize: 26, fontWeight: "bold", color: "#ff4d4d" },
  profileCard: { backgroundColor: "#fff", alignItems: "center", padding: 20, borderRadius: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5, marginBottom: 20 },
  profileImage: { width: 110, height: 110, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", color: "#333" },
  email: { fontSize: 16, color: "#666", marginBottom: 10 },
  editProfileButton: { backgroundColor: "#ff4d4d", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginTop: 10 },
  editProfileText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  optionsContainer: { marginVertical: 20 },
  optionItem: { flexDirection: "row", alignItems: "center", padding: 15, backgroundColor: "#fff", borderRadius: 10, marginBottom: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  optionText: { fontSize: 16, marginLeft: 10, color: "#333" },
  logoutButton: { backgroundColor: "#ff4d4d", paddingVertical: 12, alignItems: "center", borderRadius: 10, marginTop: 10 },
  logoutText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" },
  modalContent: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: 300, alignItems: "center" },
  modalText: { fontSize: 18, marginBottom: 20, color: "#333" },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  modalCancelButton: { backgroundColor: "#ccc", padding: 10, borderRadius: 10, flex: 1, alignItems: "center", marginRight: 10 },
  modalConfirmButton: { backgroundColor: "#ff4d4d", padding: 10, borderRadius: 10, flex: 1, alignItems: "center" },
  modalButtonText: { color: "#fff", fontSize: 16 }
});
