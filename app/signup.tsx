import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/800x1200/?seafood,restaurant,fishmarket" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.brand}>DropFisher</Text>
          <Text style={styles.tagline}>Fresh Seafood, Right at Your Doorstep</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={22} color="#ff4d4d" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#999" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={22} color="#ff4d4d" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={22} color="#ff4d4d" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.switchText}>
              Already have an account? <Text style={styles.loginText}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay for contrast
  },
  container: {
    width: "85%",
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 8,
  },
  brand: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#ff4d4d",
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fef2f2",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ff4d4d",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff4d4d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#ff4d4d",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    color: "#333",
    marginTop: 15,
  },
  loginText: {
    color: "#ff4d4d",
    fontWeight: "bold",
  },
});
